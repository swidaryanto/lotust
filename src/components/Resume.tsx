import './Resume.css';

interface Experience {
    company: string;
    roles: {
        title: string;
        period: string;
        description: string[];
    }[];
}

const experiences: Experience[] = [
    {
        company: "Hypefast",
        roles: [
            {
                title: "Senior Product Designer",
                period: "05/2025 - Present",
                description: [
                    "Building D2C Websites (0-1) for 3 Brands: Cessa, Bohopanna & Luxcrime from scratch and enhancing their UX.",
                    "Enhancing the Melaka B2B Dashboard & Catalog experience for HDN to support business operations.",
                    "Utilize AI to Support Design & Research Process."
                ]
            },
            {
                title: "Product Designer II, Sr. Associate",
                period: "08/2022 - 05/2025",
                description: [
                    "Redesigned the Melaka catalog experience [B2C & B2B], improving user navigation and checkout flow, which contributed to a 200% increase in revenue for partnered brands.",
                    "Streamlining landing page and CMS updates using Webflow, reducing engineering effort.",
                    "Optimized the design system, enabling the team to deliver comparable design tasks in roughly one quarter of the previous time (≈3–4× throughput per designer).",
                    "Led and mentored product design interns, fostering skill development and design best practices."
                ]
            }
        ]
    },
    {
        company: "PasarPolis",
        roles: [
            {
                title: "Senior UI/UX Designer",
                period: "03/2022 - 08/2022",
                description: [
                    "Collaborated with Lead UI/UX to redesign the PasarPolis Mitra app, enhancing the user experience through A/B testing and data-driven UX research for 100+ insurance agents.",
                    "Refined the PasarPolis Mitra design system, ensuring consistency and scalability across new features and platform updates."
                ]
            },
            {
                title: "UI/UX Designer",
                period: "04/2021 - 03/2022",
                description: [
                    "Improved the digital experience for insurance partners, streamlining the sales journey within the Mitra app, leading to higher adoption rates and customer satisfaction.",
                    "Collaborated closely with cross-functional teams to translate business needs into intuitive, user-centered designs."
                ]
            }
        ]
    },
    {
        company: "Manuva (Formerly Tjetak)",
        roles: [
            {
                title: "Product Manager",
                period: "12/2020 - 04/2021",
                description: [
                    "Oversaw the development of a Progressive Web App (PWA) for 3PP Tjetak Partner, enhancing usability and operational efficiency.",
                    "Collaborated with researchers to do in-depth user research and usability testing, translating insights into actionable design and product enhancements."
                ]
            },
            {
                title: "Product Designer",
                period: "07/2019 - 11/2020",
                description: [
                    "Developed and standardized reusable design assets, streamlining workflows and ensuring brand consistency across Tjetak’s internal system.",
                    "Designed and delivered intuitive experiences for Tjetak's internal platforms, improving efficiency for internal teams."
                ]
            }
        ]
    },
    {
        company: "Vouch Concierge",
        roles: [
            {
                title: "UI Designer Freelance (Remote)",
                period: "12/2019 - 01/2020",
                description: [
                    "Improved the experience of the Booking Facility dashboard and Web Chatbot."
                ]
            }
        ]
    },
    {
        company: "Seekmi",
        roles: [
            {
                title: "UI Designer",
                period: "11/2018 - 07/2019",
                description: [
                    "Created UI design for Seekmi Partners Website and UI Android Mobile Platform for Seekmi Drivers.",
                    "Explored many features in Figma during my first job at a startup."
                ]
            }
        ]
    }
];

export default function Resume() {
    return (
        <section className="resume-section">
            <p className="resume-tagline">
                7+ years&rsquo; experience designing consumer websites, business tools, and new product launches.
            </p>
            <div className="experience-list">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="experience-item">
                        <h3 className="company-name">{exp.company}</h3>
                        {exp.roles.map((role, rIdx) => (
                            <div key={rIdx} className="role-item">
                                <div className="role-header">
                                    <span className="role-title">{role.title}</span>
                                    <span className="role-period">{role.period}</span>
                                </div>
                                <ul className="role-description">
                                    {role.description.map((desc, dIdx) => (
                                        <li key={dIdx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="resume-grid">
                <div className="resume-column">
                    <div className="resume-header-group">
                        <h2 className="resume-label">Skills</h2>
                        <div className="resume-separator"></div>
                    </div>
                    <ul className="resume-list">
                        <li>Design Strategy & Leadership</li>
                        <li>Design Systems & Component Libraries</li>
                        <li>Interaction Design & Prototyping</li>
                        <li>User Research & Usability Testing</li>
                        <li>AI Prototyping & Prompt Engineering</li>
                        <li>Vibe Coding for Rapid Iteration</li>
                        <li>Front-End Fundamentals (HTML/CSS/JS)</li>
                        <li>Design Handoffs & Developer Collaboration</li>
                    </ul>
                </div>
                <div className="resume-column">
                    <div className="resume-header-group">
                        <h2 className="resume-label">Tools</h2>
                        <div className="resume-separator"></div>
                    </div>
                    <ul className="resume-list">
                        <li>Design: Figma (Primary), Framer</li>
                        <li>Analytics: PostHog</li>
                        <li>Prototyping: Antigravity, Lovable</li>
                        <li>Research: Perplexity</li>
                        <li>Project Management: JIRA, Confluence</li>
                        <li>Copywriting: DeepSeek</li>
                        <li>AI/Coding: Claude &amp; Codex</li>
                    </ul>
                </div>
            </div>

            <div className="resume-grid">
                <div className="resume-column">
                    <div className="resume-header-group">
                        <h2 className="resume-label">Education</h2>
                        <div className="resume-separator"></div>
                    </div>
                    <div className="edu-item">
                        <p className="edu-title">Business Administration & Management, Master’s Degree</p>
                        <p className="edu-school">Telkom University</p>
                    </div>
                    <div className="edu-item">
                        <p className="edu-title">Computer Science, Bachelor Degree</p>
                        <p className="edu-school">Institut Teknologi Telkom Purwokerto</p>
                    </div>

                    <div className="resume-header-group languages-header-group">
                        <h2 className="resume-label">Languages</h2>
                        <div className="resume-separator"></div>
                    </div>
                    <ul className="resume-list">
                        <li>Indonesia (Fluent)</li>
                        <li>English (Professional)</li>
                    </ul>
                </div>
                <div className="resume-column">
                    <div className="resume-header-group">
                        <h2 className="resume-label">Mentorship</h2>
                        <div className="resume-separator"></div>
                    </div>
                    <div className="mentorship-item">
                        <p className="mentor-org">DBS Foundation by Dicoding</p>
                        <p className="mentor-role">Non-Tech Advisor (UI/UX), 2025</p>
                    </div>
                    <div className="mentorship-item">
                        <p className="mentor-org">Bangkit Academy</p>
                        <p className="mentor-role">Non-Tech Advisor (UI/UX), 2024</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
