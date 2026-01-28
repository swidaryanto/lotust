import './StudyCases.css';

interface Case {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    page?: string;
}

interface StudyCasesProps {
    onPageChange?: (page: string | null) => void;
}

const cases: Case[] = [
    {
        id: 1,
        title: "Optimizing Promo Visibility for Melaka Catalog",
        subtitle: "Enhancing merchant discovery through strategic layout improvements.",
        date: "December 31, 2025",
        page: "promo-visibility"
    },
    {
        id: 2,
        title: "What is Flowchart?",
        subtitle: "A comprehensive guide to visualizing processes and logic.",
        date: "January 1, 2026",
        page: "flowchart"
    },
    {
        id: 3,
        title: "Integrate ChatGPT to Melaka",
        subtitle: "Leveraging AI to assist seamless merchant interactions.",
        date: "January 16, 2026",
        page: "chatgpt-coming-soon"
    }
];

export default function StudyCases({ onPageChange }: StudyCasesProps) {
    const handleItemClick = (item: Case) => {
        if (item.page && onPageChange) {
            onPageChange(item.page);
        }
    };

    return (
        <section className="study-cases-section">
            <div className="sc-header-group">
                <h2 className="sc-label">
                    Projects
                </h2>
                <div className="sc-separator"></div>
            </div>

            <div className="sc-list">
                {cases.map((item) => (
                    <div
                        key={item.id}
                        className={`sc-item ${item.page ? 'sc-item-clickable' : ''}`}
                        onClick={() => handleItemClick(item)}
                    >
                        <div className="sc-item-header">
                            <h3 className="sc-item-title">{item.title}</h3>
                            {item.page && (
                                <svg className="external-link-icon internal-link" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            )}
                        </div>
                        <p className="sc-item-subtitle">{item.subtitle}</p>
                        <span className="sc-item-date">{item.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
