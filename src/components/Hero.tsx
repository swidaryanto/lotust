import './Hero.css';

export default function Hero() {
    return (
        <section className="container hero-section">
            <div className="intro-wrapper">
                <div className="intro-header-group">
                    <h2 className="intro-label">
                        Introductions<sup>01</sup>
                    </h2>
                    <div className="separator"></div>
                </div>

                <div className="intro-content">
                    <p className="intro-paragraph">
                        Hej! I’m <strong>Septian Widaryanto</strong>, and I’m excited to create loveable products as a designer at <strong>Hypefast</strong>,
                        helping their 5+ brands shine. You can explore my current project at <a href="#">Melaka.app</a> 📦
                        —feel free to share your thoughts or say hi on <a href="#">LinkedIn</a> :) or my email at <a href="mailto:septianwidaryanto@gmail.com">septianwidaryanto@gmail.com</a>
                        <span style={{ marginLeft: '4px' }}>📩</span>
                    </p>

                    <p className="intro-paragraph">This page is still growing :)</p>
                </div>
            </div>
        </section>
    );
}
