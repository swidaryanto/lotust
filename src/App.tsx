import { useState } from 'react';
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

  const renderContent = () => {
    // If a specific page is selected, render it
    if (currentPage === 'flowchart') {
      return <Flowchart onBack={() => handlePageChange(null)} />;
    }
    if (currentPage === 'promo-visibility') {
      return <PromoVisibility onBack={() => handlePageChange(null)} />;
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
    <>
      {!currentPage && <Hero activeTab={activeTab} onTabChange={handleTabChange} />}
      <div className="container" style={{ paddingTop: currentPage ? '3rem' : 0 }}>
        {renderContent()}
      </div>
    </>
  );
}

export default App;
