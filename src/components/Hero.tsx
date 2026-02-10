import './Hero.css';

interface HeroProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function Hero({ activeTab, onTabChange }: HeroProps) {
    return (
        <section className="container" style={{ paddingBottom: activeTab === 'home' ? '3rem' : '0' }}>
            <div className="nav-wrapper">
                <nav className="portfolio-nav">
                    <button
                        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
                        onClick={() => onTabChange('home')}
                    >
                        Home
                    </button>
                    <span className="nav-separator">/</span>
                    <button
                        className={`nav-item ${activeTab === 'resume' ? 'active' : ''}`}
                        onClick={() => onTabChange('resume')}
                    >
                        resume
                    </button>
                    <span className="nav-separator">/</span>
                    <button
                        className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`}
                        onClick={() => onTabChange('activity')}
                    >
                        Activity Space
                    </button>
                </nav>
            </div>

            {activeTab === 'home' && (
                <div className="intro-content">
                    <p className="intro-paragraph">
                        Hej! I’m Septian Widaryanto, and I am a designer at <a href="https://www.hypefast.id/" className="hypefast-link"><strong>Hypefast</strong></a>,
                        helping their 5+ brands shine. You can explore my current project at <a href="https://dashboard.melaka.app/login">Melaka.app</a> 📦
                        —feel free to share your thoughts or say hi on <a href="https://linkedin.com/in/septianwidaryanto">LinkedIn</a> :) or my email at <a href="mailto:septianwidaryanto@gmail.com">septianwidaryanto@gmail.com</a>
                        <span style={{ marginLeft: '4px' }}>📩</span>
                    </p>

                    <p className="intro-paragraph intro-paragraph--highlight">
                        This page is still growing, but I’m happy to share it with you. If you’d like to see my past projects
                        and the story of my mentoring sessions, just scroll below—I’d love your feedback or a friendly greeting!
                    </p>
                </div>
            )}
        </section>
    );
}
