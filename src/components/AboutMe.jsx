import { useState } from "react"
//AboutMe XML
export default function AboutMe(){
    //hooks
    const[Photo, setPhoto] = useState('');
    const[Bio,setBio] = useState('');
    return(<>
    <div className="About-Me"><h2>About Me</h2></div>
    <div id="Photo-Me">
        <img 
        src="https://media.licdn.com/dms/image/C4E03AQG1fZyVTP_5mw/profile-displayphoto-shrink_800_800/0/1647986042864?e=1726099200&v=beta&t=cPgYKoYLxeamZo-kzLuauRZGIoTx9lEEnhi27cxBY4I"
        width={'210px'}
        height={'200px'} 
        >

        </img>
    </div>
    <div className="paragraph">
        <p>My name is Paul Bilbatua, a dedicated and passionated full stack developer with strong learning on front-end and back-end technologies.
           I have an interest developing web applications that provides interactivity making users to have a pleasant experience while using web applications,
           and meeting their needs obtained.I have worked on multiple projects from creating a weather application with real-time data to a messaging app
           where enables two or more people to communicate via text on real-time. I have worked on multiple technologies such as React, Mongoose, Express
           Apollo Client, PostgreSQL, Javscript, HTML, CSS, and Sequelize. In addition to my skills, I am looking forward to continue learning new technologies
           such as Typescript, Python, and even Salesforce to improve myself as a developer and contribute with others.
        </p>
    </div>
    <h2 id="Journey-T">My Journey</h2>
    <div className="journey">
        <p>
        Two years ago, my passion for coding began when I stumbled upon the world of web development. 
        Starting with the basics of HTML, CSS, and JavaScript, I quickly realized that coding was more than 
        just a skill—it was a creative outlet. As I delved deeper, I became familiar with various JavaScript libraries and 
        frameworks like React and Node.js, which opened up a world of possibilities for building dynamic, interactive 
        applications.Throughout this journey, I've had the opportunity to work on diverse projects such as a Messaging Application,
        Weather Dashboard, Fantasy Basketball Application, and even an encyclopedia designed for Pokémon fans. These projects involved 
        collaborating with team members from my coding bootcamp, creating wireframes, and implementing functionality using a combination 
        of technologies like Node.js, Express, Sequelize, Mongoose, and React. These experiences not only honed my technical skills but also 
        deepened my love for problem-solving.Naturally, there have been bumps in the road. I've faced challenges like getting a single JavaScript 
        function to work or connecting the front end with the back end using MERN stack technologies. However, each obstacle has made me more determined 
        to keep moving forward.Looking ahead, I'm eager to continue growing as a developer. I have ambitions to learn TypeScript, Python, AI, and Salesforce. 
        I'm excited to tackle new challenges, participate in creative projects, and stay current with the rapidly evolving tech industry.Check out my work and 
        don't hesitate to get in touch with me—I'm always open to new ideas and collaborations.
        </p>
    </div>
    </>)
}


