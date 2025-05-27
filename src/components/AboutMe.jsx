import { useState } from "react"

export default function AboutMe(){
    const[Photo, setPhoto] = useState('');
    const[Bio,setBio] = useState('');
    
    return(<>
        <div className="About-Me">
            <h2>About Me</h2>
        </div>
        
        <div id="Photo-Me">
            <img 
                src="../assets/Screenshot 2024-07-12 141054.png"
                width='210px'
                height='200px'
                alt="Paul Bilbatua - Full Stack Developer"
            />
        </div>
        
        <div className="bio-section">
            <div className="intro-paragraph">
                <p>
                    My name is <strong>Paul Bilbatua</strong>, a dedicated and passionate full stack developer 
                    with strong expertise in front-end and back-end technologies. I specialize in developing 
                    interactive web applications that provide users with pleasant, seamless experiences while 
                    meeting their unique needs.
                </p>
            </div>
            
            <div className="experience-paragraph">
                <h3>What I Do</h3>
                <p>
                    I've worked on diverse projects ranging from real-time weather applications to messaging 
                    platforms that enable seamless communication between users. My technical toolkit includes 
                    <strong> React, Node.js, Express, MongoDB, PostgreSQL, JavaScript, HTML, CSS</strong>, 
                    and many other modern technologies.
                </p>
            </div>
            
            <div className="growth-paragraph">
                <h3>Always Learning</h3>
                <p>
                    I'm committed to continuous growth and am currently expanding my skills in 
                    <strong> TypeScript, Python, and Salesforce</strong> to stay current with industry trends 
                    and contribute meaningfully to development teams.
                </p>
            </div>
        </div>

        <div className="journey-section">
            <h2 id="Journey-T">My Journey</h2>
            
            <div className="journey-content">
                <div className="journey-beginning">
                    <h3>🚀 How It All Started</h3>
                    <p>
                        Two years ago, my passion for coding began when I stumbled upon the world of web development. 
                        Starting with HTML, CSS, and JavaScript, I quickly realized that coding was more than just a 
                        skill—it was a creative outlet that allowed me to bring ideas to life.
                    </p>
                </div>
                
                <div className="journey-growth">
                    <h3>💡 Building & Learning</h3>
                    <p>
                        As I delved deeper into JavaScript libraries and frameworks like React and Node.js, a world 
                        of possibilities opened up. I've had the opportunity to work on exciting projects including:
                    </p>
                    <ul className="project-highlights">
                        <li>Real-time Messaging Application</li>
                        <li>Interactive Weather Dashboard</li>
                        <li>Fantasy Basketball Voting App</li>
                        <li>Pokémon Encyclopedia (Dexplorer)</li>
                    </ul>
                    <p>
                        These projects involved collaborating with bootcamp teammates, creating wireframes, and 
                        implementing full-stack functionality using the MERN stack and other modern technologies.
                    </p>
                </div>
                
                <div className="journey-challenges">
                    <h3>🎯 Overcoming Challenges</h3>
                    <p>
                        Every developer faces obstacles, and I'm no different. From debugging complex JavaScript 
                        functions to connecting frontend and backend systems, each challenge has made me more 
                        determined and skilled. I've learned that persistence and problem-solving are just as 
                        important as technical knowledge.
                    </p>
                </div>
                
                <div className="journey-future">
                    <h3>🌟 Looking Ahead</h3>
                    <p>
                        I'm excited to continue growing as a developer. My goals include mastering TypeScript, 
                        exploring AI technologies, and learning Salesforce development. I'm always open to 
                        <strong> new collaborations, creative projects, and opportunities</strong> to make an impact 
                        in the rapidly evolving tech industry.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="cta-section">
            <p className="cta-text">
                <strong>Let's connect!</strong> Check out my work and don't hesitate to reach out—I'm always 
                open to new ideas and collaborations.
            </p>
        </div>
    </>)
}


