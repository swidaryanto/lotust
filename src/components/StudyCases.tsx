import './StudyCases.css';

interface Case {
    id: number;
    title: string;
    subtitle: string;
    date: string;
}

const cases: Case[] = [
    {
        id: 1,
        title: "Optimizing Promo Visibility for Melaka Catalog",
        subtitle: "Enhancing merchant discovery through strategic layout improvements.",
        date: "December 31, 2025"
    },
    {
        id: 2,
        title: "What is Flowchart?",
        subtitle: "A comprehensive guide to visualizing processes and logic.",
        date: "January 1, 2026"
    },
    {
        id: 3,
        title: "Integrated Chat GPT on Melaka",
        subtitle: "Leveraging AI to assist seamless merchant interactions.",
        date: "January 16, 2026"
    }
];

export default function StudyCases() {
    return (
        <section className="study-cases-section">
            <div className="sc-header-group">
                <h2 className="sc-label">
                    Study Cases
                </h2>
                <div className="sc-separator"></div>
            </div>

            <div className="sc-list">
                {cases.map((item) => (
                    <div key={item.id} className="sc-item">
                        <h3 className="sc-item-title">{item.title}</h3>
                        <p className="sc-item-subtitle">{item.subtitle}</p>
                        <span className="sc-item-date">{item.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
