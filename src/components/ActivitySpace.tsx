import './StudyCases.css';

interface Activity {
    id: number;
    title: string;
    subtitle: string;
    link: string;
    category: string;
}

const activities: Activity[] = [
    {
        id: 1,
        title: "Pomodoro Lofi",
        subtitle: "A productivity tool combining Pomodoro technique with relaxing lofi aesthetics.",
        link: "https://berry-throb-71228815.figma.site/",
        category: "AI Exploration"
    },
    {
        id: 2,
        title: "Learn Hiragana",
        subtitle: "Interactive platform for mastering Japanese Hiragana characters efficiently.",
        link: "https://hiraganaseptian.lovable.app",
        category: "AI Exploration"
    },
    {
        id: 3,
        title: "Cookie Eye (Interactive)",
        subtitle: "An engaging interactive exploration using modern web technologies.",
        link: "https://cookieee.lovable.app/",
        category: "AI Exploration"
    },
    {
        id: 4,
        title: "Animated Gradient",
        subtitle: "Experimenting with smooth, dynamic gradient transitions for web interfaces.",
        link: "https://emboss-mocha-80930300.figma.site",
        category: "AI Exploration"
    },
    {
        id: 5,
        title: "Ilo Journal",
        subtitle: "A digital journaling experience focused on simplicity and mindfulness.",
        link: "https://ilo-ten.vercel.app/",
        category: "AI Exploration"
    },
    {
        id: 6,
        title: "Bohopanna",
        subtitle: "D2C website design for a modern children's clothing brand.",
        link: "https://bohopanna.com/",
        category: "D2C Website"
    },
    {
        id: 7,
        title: "Luxcrime",
        subtitle: "Enhancing the digital shopping experience for a leading beauty brand.",
        link: "https://luxcrime.com/",
        category: "D2C Website"
    },
    {
        id: 8,
        title: "Cessa",
        subtitle: "Designing a seamless D2C platform for natural health products.",
        link: "https://cessanatural.com/",
        category: "D2C Website"
    },
    {
        id: 9,
        title: "Teracy (Alone Together)",
        subtitle: "An online coworking space for remote workers and freelancers.",
        link: "https://app.teracy.io/invite/u5zvarB2ZUS9wXKvhpCV7b",
        category: "Coworking Space"
    }
];

export default function ActivitySpace() {
    const aiExploration = activities.filter(a => a.category === "AI Exploration");
    const d2cWebsites = activities.filter(a => a.category === "D2C Website");
    const coworkingSpace = activities.filter(a => a.category === "Coworking Space");

    const renderList = (items: Activity[]) => (
        <div className="sc-list">
            {items.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    className="sc-item activity-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="sc-item-header">
                        <h3 className="sc-item-title">{item.title}</h3>
                        <svg className="external-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </div>
                    <p className="sc-item-subtitle">{item.subtitle}</p>
                </a>
            ))}
        </div>
    );

    return (
        <section className="study-cases-section">
            <div className="sc-header-group">
                <h2 className="sc-label">AI Exploration</h2>
                <div className="sc-separator"></div>
            </div>
            {renderList(aiExploration)}

            <div className="sc-header-group" style={{ marginTop: '4rem' }}>
                <h2 className="sc-label">D2C Projects</h2>
                <div className="sc-separator"></div>
            </div>
            {renderList(d2cWebsites)}

            <div className="sc-header-group" style={{ marginTop: '4rem' }}>
                <h2 className="sc-label">Coworking Space</h2>
                <div className="sc-separator"></div>
            </div>
            {renderList(coworkingSpace)}
        </section>
    );
}
