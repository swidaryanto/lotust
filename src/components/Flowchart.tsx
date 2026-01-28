import './ProjectPage.css';

interface FlowchartProps {
    onBack: () => void;
}

export default function Flowchart({ onBack }: FlowchartProps) {
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
                <h1 className="project-title">What is Flowchart?</h1>
                <span className="project-date">January 1, 2026</span>
            </header>

            <div className="project-content">
                <section className="project-section">
                    <h3>So, what is a process?</h3>
                    <p>An activity that changes or transforms some input(s) to create an output. To make it easier, we can use a project to make the process more understandable.</p>
                </section>

                <section className="project-section">
                    <h3>What is Flowchart?</h3>
                    <p>A diagram that depicts a process, system, or computer algorithm. Flowcharts are widely used in multiple fields to document, study, plan, improve, and communicate often complex processes in clear, easy-to-understand diagrams.</p>
                </section>

                <section className="project-section">
                    <h3>Do you know the history?</h3>
                    <p>The first structured method for documenting process flow, the "flow process chart", was introduced by Frank and Lillian Gilbreth in the presentation "Process Charts: First Steps in Finding the One Best Way to do Work", to members of the American Society of Mechanical Engineers (ASME) in 1921.</p>
                </section>

                <section className="project-section">
                    <h3>The purpose of the project</h3>
                    <ol>
                        <li>Flowchart is very powerful for understanding the process. Because NOBODY knows the process.</li>
                        <li>Often leads to the elimination of unnecessary work (brainstorming/iteration phase).</li>
                    </ol>
                </section>

                <section className="project-section">
                    <h3>When to use a Flowchart?</h3>
                    <ul>
                        <li>To develop an understanding of how a process is done</li>
                        <li>To study a process for improvement</li>
                        <li>To communicate to others how a process is done</li>
                        <li>When better communication is needed between people involved with the same process</li>
                        <li>To document a process</li>
                    </ul>
                </section>

                <section className="project-section">
                    <h3>Types of project</h3>
                    <ol>
                        <li><strong>High-Level</strong> — Flow that leverages step symbols.</li>
                        <li><strong>Detailed</strong> — Flowchart that leverages all symbols.</li>
                    </ol>
                </section>

                <section className="project-section">
                    <h3>Flowchart is full of symbols, what is a symbol?</h3>
                    <p>Flowchart symbols have many standard shapes, and it depends on the industry. The American National Standards Institute (ANSI) set standards for projects and their symbols in the 1960s.</p>
                    <p>Besides symbols, projects use color to indicate status. Color can be used to:</p>
                    <ol>
                        <li>Mark particular symbols such as every positive output as green or negative output as red, and another color to indicate the start and end.</li>
                        <li>Ensure readability and pay attention to avoid color contrast issues for the symbol colors.</li>
                    </ol>
                </section>

                <section className="project-section">
                    <h3>How good and bad can a Flowchart be?</h3>
                    <ul>
                        <li><strong>Bad ones</strong> are difficult to use because the lines and shapes aren't aligned and it's monochromatic.</li>
                        <li><strong>Good ones</strong> have proper alignment and different colors on symbols.</li>
                    </ul>
                    <p>A project should show:</p>
                    <ol>
                        <li>Start and End</li>
                        <li>Required steps</li>
                        <li>Sequence or order of the steps</li>
                        <li>Flow from top to bottom or left to right</li>
                    </ol>
                </section>

                <section className="project-section">
                    <h3>Flowcharts in Design Process</h3>
                    <ol>
                        <li><strong>Task flow</strong> — Lowest fidelity of the flow (e.g., finding a pancake recipe)</li>
                        <li><strong>User flow</strong> — Single persona of user (e.g., Making a pancake)</li>
                    </ol>
                    <p>Tools that will help you create a project: Draw.io, Miro, FigJam, and more.</p>
                </section>

                <section className="project-section">
                    <h3>Conclusion</h3>
                    <ol>
                        <li>The level of detail of the project may vary depending on you (project maker).</li>
                        <li>Try mapping regularly to improve project creation and it's important to stick to the purpose of the project.</li>
                        <li>How to validate a project? Collaborate with your teammates to challenge your project.</li>
                    </ol>
                </section>

                <div className="project-references">
                    <h4>References</h4>
                    <ul>
                        <li><a href="https://asq.org/quality-resources/project" target="_blank" rel="noopener noreferrer">Flowchart in ASQ.org</a></li>
                        <li><a href="https://www.coursera.org/videos/six-sigma-organization-advanced/irRBj" target="_blank" rel="noopener noreferrer">Coursera: Flowchart & Process Mapping</a></li>
                        <li><a href="https://www.coursera.org/videos/leading-change-health-informatics/VuFad" target="_blank" rel="noopener noreferrer">Coursera: Leading changes in Health Informatics</a></li>
                        <li><a href="https://www.lucidchart.com/blog/project-symbols-and-notation" target="_blank" rel="noopener noreferrer">Lucidchart: Flowchart symbols and notation</a></li>
                        <li><a href="https://creately.com/blog/diagrams/choosing-color-to-improve-your-diagrams/" target="_blank" rel="noopener noreferrer">Creately: Choosing color to improve your diagram</a></li>
                        <li><a href="https://www.deliverableux.com/what-are-ux-deliverables#ux_flow_diagram" target="_blank" rel="noopener noreferrer">Deliverable UX: UX Flow Diagram</a></li>
                        <li><a href="https://medium.com/erika-harano/ux-task-flows-versus-user-flows-as-demonstrated-by-pancakes-896e78a98026" target="_blank" rel="noopener noreferrer">Medium: Task flow vs User flow</a></li>
                    </ul>
                </div>
            </div>
        </article>
    );
}
