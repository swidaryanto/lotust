import './ProjectPage.css';

interface PromoVisibilityProps {
    onBack: () => void;
}

export default function PromoVisibility({ onBack }: PromoVisibilityProps) {
    return (
        <article className="project-page">
            <button className="project-back" onClick={onBack}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5"></path>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Projects
            </button>

            <header className="project-header">
                <h1 className="project-title">Optimizing Promo Visibility for Melaka Catalog</h1>
                <span className="project-date">December 31, 2025</span>
            </header>

            <div className="project-content">
                <section className="project-section">
                    <h3>The Strategic Challenge</h3>
                    <p>At Melaka, we developed a streamlined catalog platform designed to bridge the gap between social commerce and traditional e-commerce. Our pilot partner, Nona Rara Batik, serves a loyal but specific demographic nicknamed JengSis.</p>
                    <p>Despite strong top-of-funnel interest driven by Instagram FOMO campaigns (8.8 and Merdeka Sales), our conversion data revealed a significant leak. Users were landing on the platform but failing to convert at the expected rate (the target back then was at least 10 orders).</p>
                    <p>The data was clear: while the marketing team was effectively generating hype, the product experience was failing to close the trust and value gap at the moment of decision. We were generating interest, but not intent. From the order total, we saw only 5 orders were generated.</p>
                </section>

                <section className="project-section">
                    <h3>Pain Points</h3>
                    <p>After conducting desk research to analyze patterns from major e-commerce players (Shopee and Tokopedia), we identified two primary frictions:</p>
                    <ol>
                        <li><strong>Lack of urgency indicators:</strong> Stock levels were hidden from the users.</li>
                        <li><strong>Low price transparency:</strong> Discounts were noted but not visually quantified, making it hard for users to perceive value.</li>
                    </ol>
                </section>

                <section className="project-section">
                    <h3>Competitive Benchmarking & Pattern Validation</h3>
                    <p>As the designer, I moved beyond visual updates to analyze mental models in the Indonesian e-commerce landscape. For our demographic, excessive innovation can be a barrier if it breaks familiar utility patterns.</p>
                    <p>I conducted comparative desk research from market leaders like Tokopedia and Shopee to identify universal cues for value recognition and scarcity.</p>
                    <p>Insights from the audit:</p>
                    <ul>
                        <li><strong>Visual Anchoring:</strong> Highlighting specific savings percentages in high-contrast badges significantly improves value perception for the buyer.</li>
                        <li><strong>Relative Urgency:</strong> Low stock indicators help reduce decision paralysis by providing clear context.</li>
                    </ul>
                    <p>By adopting these established patterns, we aimed to reduce cognitive load and allow users to rely on existing shopping habits.</p>
                </section>

                <section className="project-section">
                    <h3>Solutions</h3>
                    <p>The design improvements focused on two core areas:</p>
                    <ol>
                        <li><strong>Integrated clear discount indicators:</strong> Added precise values (e.g., -10%) to highlight the deal.</li>
                        <li><strong>Introduced urgency indicators:</strong> Added orange labels for low-stock items (e.g., "Stok: Sisa 2") to encourage faster decision-making.</li>
                    </ol>
                </section>

                <section className="project-section">
                    <h3>Business Impact & Reflection</h3>
                    <p>By aligning our UI with existing user expectations, we saw immediate quantitative shifts within 45 days after deployment:</p>
                    <ul>
                        <li><strong>Order Volume:</strong> Increased by 41% month-over-month.</li>
                        <li><strong>Conversion:</strong> Bridged the gap between marketing campaigns and product checkout, resulting in 17 direct orders in the next cycle.</li>
                    </ul>
                    <p>My role also involved communicating with the brand to ensure that the marketing strategy was structurally supported by the product experience. We didn’t just move pixels; as a team, we built a scalable revenue engine.</p>
                </section>

                <section className="project-section">
                    <h3>What I've learned from this improvement project</h3>
                    <p>I learned that product experience is not a magic bullet itself; it must be supported by brand marketing efforts. However, with these UI improvements, we significantly enhanced the user journey for customers buying from Nona Rara Batik.</p>
                </section>
            </div>
        </article>
    );
}
