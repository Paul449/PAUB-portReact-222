import { pdfjs } from "react-pdf";
import React, { useEffect, useState } from "react";

export default function Resume(){
    const [download, setDownload] = useState(false);
    
    useEffect(() => {
        const pdfPath = "./src/PaulBilbatua-resume.pdf";
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

        pdfjs.getDocument(pdfPath).promise
            .then((pdf) => {
                console.log("PDF loaded", pdf);
            })
            .catch((error) => {
                console.error("Error loading PDF", error);
            });
    }, []);

    const handleDownload = () => {
        window.open("/src/PaulBilbatua-resume.pdf", "_blank");
        setDownload(true);
    };

    const frontendSkills = [
    { name: "HTML5", level: "Advanced", years: "1+" },
    { name: "CSS3", level: "Expert", years: "1+" },
    { name: "JavaScript (ES6+)", level: "Advanced", years: "2+" },
    { name: "React.js", level: "Advanced", years: "<1" },
    { name: "Tailwind CSS", level: "Advanced", years: "<1" },
    { name: "Bootstrap", level: "Intermediate", years: "<1" },
    { name: "Component Libraries", level: "Intermediate", years: "<1" },
    { name: "Webpack", level: "Intermediate", years: "<1" },
    { name: "Web APIs", level: "Advanced", years: "<1" },
    { name: "Git/GitHub/GitLab", level: "Advanced", years: "1.5+" },
    { name: "Linux CLI", level: "Intermediate", years: "1.5+" }
];

const backendSkills = [
    { name: "MERN Stack", level: "Advanced", years: "1" },
    { name: "Node.js", level: "Advanced", years: "1" },
    { name: "Express.js", level: "Advanced", years: "<1" },
    { name: "RESTful APIs", level: "Advanced", years: "1" },
    { name: "GraphQL", level: "Intermediate", years: "<1" },
    { name: "Jest Unit Testing", level: "Intermediate", years: "<1" },
    { name: "PostgreSQL", level: "Intermediate", years: "1+" },
    { name: "MongoDB", level: "Advanced", years: "<1" }
];

const toolsAndMethodologies = [
    { name: "Git/GitHub", level: "Advanced", years: "1.5+" },
    { name: "Postman", level: "Advanced", years: "1+" },
    { name: "Jest Testing", level: "Intermediate", years: "<1" },
    { name: "Webpack", level: "Intermediate", years: "<1" },
    { name: "Agile/Scrum", level: "Intermediate", years: "<1" },
    { name: "Component-Driven Development", level: "Advanced", years: "<1" }
];

    const SkillItem = ({ skill }) => (
        <div className="skill-item">
            <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className={`skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                </span>
            </div>
            <div className="skill-details">
                <span className="skill-years">{skill.years} years</span>
                <div className="skill-bar">
                    <div 
                        className={`skill-progress ${skill.level.toLowerCase()}`}
                        style={{
                            width: skill.level === 'Expert' ? '95%' : 
                                   skill.level === 'Advanced' ? '80%' : 
                                   skill.level === 'Intermediate' ? '65%' : '40%'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="resume-header">
                <h2 id="resume-title">Resume</h2>
                <p className="resume-subtitle">
                    Full Stack Developer with expertise in modern web technologies
                </p>
                <div className="resume-download">
                    <p id="download">
                        Download my{" "}
                        <button onClick={handleDownload} id="resumebtn" className="download-btn">
                            📄 Resume PDF
                        </button>
                    </p>
                    {download && (
                        <p className="download-success">✅ Resume downloaded successfully!</p>
                    )}
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-section">
                    <div className="skills-header">
                        <h2>🎨 Frontend Proficiencies</h2>
                        <p>User interface and client-side development</p>
                    </div>
                    <div className="skills-grid">
                        {frontendSkills.map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                <div className="skills-section">
                    <div className="skills-header">
                        <h2>⚙️ Backend Proficiencies</h2>
                        <p>Server-side development and database management</p>
                    </div>
                    <div className="skills-grid">
                        {backendSkills.map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="skills-header">
                        <h2>🛠️ Tools & Methodologies</h2>
                        <p>Development tools and best practices</p>
                    </div>
                    <div className="skills-grid">
                        {toolsAndMethodologies.map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="learning-section">
                <h3>🚀 Currently Learning</h3>
                <div className="learning-items">
                    <span className="learning-item">TypeScript</span>
                </div>
            </div>

            <div className="resume-footer">
                <p>
                    <strong>Ready to collaborate?</strong> Let's discuss how my skills can contribute to your next project.
                </p>
            </div>
        </>
    );
}
