import { useState, useRef } from 'react';
import Hero from './components/Hero';
import StudyCases from './components/StudyCases';
import ComingSoon from './components/ComingSoon';
import Resume from './components/Resume';
import ActivitySpace from './components/ActivitySpace';
import Flowchart from './components/Flowchart';
import PromoVisibility from './components/PromoVisibility';

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'home';
  });

  const [currentPage, setCurrentPage] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('page') || null;
  });

  // Swipe gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(null);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    url.searchParams.delete('page');
    window.history.pushState({}, '', url);
  };

  const handlePageChange = (page: string | null) => {
    setCurrentPage(page);
    const url = new URL(window.location.href);
    if (page) {
      url.searchParams.set('page', page);
    } else {
      url.searchParams.delete('page');
    }
    window.history.pushState({}, '', url);
  };

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    // Only enable swipe on mobile (check width < 768px for safety or stick to 480px as per fonts)
    if (window.innerWidth > 768) return;

    // Disable swipe if viewing a project page
    if (currentPage) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      if (activeTab === 'home') handleTabChange('resume');
      else if (activeTab === 'resume') handleTabChange('activity');
    }

    if (isRightSwipe) {
      if (activeTab === 'activity') handleTabChange('resume');
      else if (activeTab === 'resume') handleTabChange('home');
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const renderContent = () => {
    // If a specific page is selected, render it
    if (currentPage === 'flowchart') {
      return <Flowchart onBack={() => handlePageChange(null)} />;
    }
    if (currentPage === 'promo-visibility') {
      return <PromoVisibility onBack={() => handlePageChange(null)} />;
    }
    if (currentPage === 'chatgpt-coming-soon') {
      return (
        <div>
          <button
            className="project-back"
            onClick={() => handlePageChange(null)}
            style={{ marginBottom: '2rem' }} // Ensure consistent spacing
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </button>
          <ComingSoon />
        </div>
      );
    }

    switch (activeTab) {
      case 'home':
        return <StudyCases onPageChange={handlePageChange} />;
      case 'resume':
        return <Resume />;
      case 'activity':
        return <ActivitySpace />;
      default:
        return <ComingSoon />;
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ minHeight: '100vh' }}
    >
      {!currentPage && <Hero activeTab={activeTab} onTabChange={handleTabChange} />}
      <div className="container" style={{ paddingTop: currentPage ? '3rem' : 0 }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
