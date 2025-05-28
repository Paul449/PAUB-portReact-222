import React from "react";
export default function Portfolio() {
    const projects = [
            {
            id: 1,
            title: "Weather Dashboard",
            description: "Interactive weather application providing real-time weather data, forecasts, and location-based weather information with clean UI.",
            technologies: ["JavaScript", "Weather API", "HTML", "CSS"],
            liveUrl: "https://paul449.github.io/Pau-Weather-89/",
            githubUrl: "https://github.com/Paul449/Pau-Weather-89/", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20200236.png",
            category: "Front End Web Application",
        },
        {
            id: 2,
            title: "Dexplorer",
            description: "A comprehensive Pokémon encyclopedia featuring detailed information, search functionality, and interactive features for Pokémon enthusiasts.",
            technologies: ["HTML", "CSS","Tailwind" ,"JavaScript", "API Integration"],
            liveUrl: "https://paul449.github.io/DexPlorer/",
            githubUrl: "https://github.com/Paul449/DexPlorer", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20191438.png",
            category: " Front End Web Application"
        },
        {
            id: 3,
            title: "SVG logo generator",
            description: "A command-line tool that generates customizable SVG logos based on user input, allowing for dynamic logo creation with various styles.",
            technologies: ["Node.js", "Inquirer", "SVG", "JavaScript"],
            liveUrl: "https://youtu.be/wuIajm8IhNU", // Add live URL if available
            githubUrl: "https://github.com/Paul449/pau-Logo.89000",
            image: "./assets/Screenshot 2025-05-27 133516.png",
            category: "Command-Line Application"
        },
        {
            id: 4,
            title: "Employee Tracker",
            description: "A command-line application for managing employee records, allowing users to add, view, and update employee information in a MySQL database.",
            technologies: ["Node.js", "postgreSQL", "Inquirer", "JavaScript"],
            liveUrl: "https://www.youtube.com/watch?v=rRaP8HVXLgA", // Add live URL if available
            githubUrl: "https://github.com/Paul449/PAU-EmpTracker89",
            image: "./assets/Screenshot 2024-12-04 134057.png",
            category: "Command-Line Application"
        },
        {
            id: 5,
            title: "Messaging App",
            description: "Real-time messaging platform enabling seamless communication between users with modern chat features and responsive design.",
            technologies: ["MERN Stack", "Socket.io", "Real-time Communication"],
            liveUrl: "https://message-central.onrender.com/",
            githubUrl: "#", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20195643.png",
            category: "Full Stack Application"
        },
        {
            id: 6,
            title: "API Social Network",
            description: "A social networking application built with a RESTful API, allowing users to create accounts, post updates, and interact with others.",
            technologies: ["Node.js", "Express", "MongoDB", "RESTful API","postman"],
            liveUrl: "#",
            githubUrl: "https://github.com/Paul449/Net-PaulAPI83",
            image: "./assets/Screenshot 2025-05-27 132751.png",
            category: "Back End Application"
        },
        {
            id: 7,
            title: "Vote4Goat",
            description: "Fantasy basketball voting application where users can vote for their favorite players and view real-time voting results.",
            technologies: ["MERN Stack", "MongoDB", "Express", "React","Node.js"],
            liveUrl: "#", // Add live URL if available
            githubUrl: "https://github.com/Paul449/vote4Goat", // Add your actual GitHub URL
            image: "./assets/Screenshot%202024-07-23%20200824.png",
            category: "Full Stack Application"
        },
        {
            id: 8,
            title: "AI-Powered Chatbot for English Practice",
            description: "An AI-driven chatbot designed to help users practice English conversation skills through interactive dialogues and feedback.",
            technologies: ["Node.js", "Express", "AI Integration", "Chatbot", "JavaScript","react","Bootstrap"],
            liveUrl: "#",
            githubUrl: "https://github.com/Paul449/PauEnglish-Practice99",
            image: "./assets/Screenshot 2024-07-26 163227.png",
            category: "full Stack Application"
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
  
