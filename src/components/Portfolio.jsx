import React from "react";
export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Dexplorer",
            description: "A comprehensive Pokémon encyclopedia featuring detailed information, search functionality, and interactive features for Pokémon enthusiasts.",
            technologies: ["React", "CSS", "JavaScript", "API Integration"],
            liveUrl: "https://paul449.github.io/DexPlorer/",
            githubUrl: "#", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20191438.png",
            category: "Web Application"
        },
        {
            id: 2,
            title: "Messaging App",
            description: "Real-time messaging platform enabling seamless communication between users with modern chat features and responsive design.",
            technologies: ["MERN Stack", "Socket.io", "Real-time Communication"],
            liveUrl: "https://message-central.onrender.com/",
            githubUrl: "#", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20195643.png",
            category: "Full Stack Application"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Interactive weather application providing real-time weather data, forecasts, and location-based weather information with clean UI.",
            technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
            liveUrl: "https://paul449.github.io/Pau-Weather-89/",
            githubUrl: "#", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20200236.png",
            category: "Web Application"
        },
        {
            id: 4,
            title: "Vote4Goat",
            description: "Fantasy basketball voting application where users can vote for their favorite players and view real-time voting results.",
            technologies: ["MERN Stack", "MongoDB", "Express", "React"],
            liveUrl: "#", // Add live URL if available
            githubUrl: "#", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20200824.png",
            category: "Full Stack Application"
        }
    ];

    return (
        <>
            <div id="port-title">
                <h1>Portfolio</h1>
                <p className="portfolio-subtitle">
                    A collection of projects showcasing my full-stack development skills
                </p>
            </div>
            
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                width={250} 
                                height={200} 
                            />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.liveUrl !== "#" && (
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="live-link"
                                        >
                                            <span>🌐</span> Live Demo
                                        </a>
                                    )}
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        <span>📁</span> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-info">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-category">{project.category}</span>
                            </div>
                            
                            <p className="project-description">
                                {project.description}
                            </p>
                            
                            <div className="project-tech">
                                <h4>Technologies Used:</h4>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="project-actions">
                                {project.liveUrl !== "#" && (
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        View Live
                                    </a>
                                )}
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="portfolio-footer">
                <p>
                    <strong>Want to see more?</strong> Check out my {""}
                    <a href="https://github.com/Paul449" target="_blank" rel="noopener noreferrer">
                        GitHub profile
                    </a>{" "}
                    for additional projects and contributions.
                </p>
            </div>
        </>
    );
}
  
