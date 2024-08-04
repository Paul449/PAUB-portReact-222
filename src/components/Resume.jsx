import React from "react";
//function
export default function Resume(){
   
        const PDF = "";
        const href = PDF;
        function download(href){
           console.log(href)
        }
         //browser.downloads.onChanged.addlistener(download)
    return(<>
    <div>
        <h2 id="resume-title">Resume</h2>
        <p id="download">Download my <a  >resume</a></p>
    </div>
    <div className="front-end">
        <h2>Front End Proficiencies</h2>
        <ol className="skill1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Linux Basics</li>
        </ol>
    </div>
    <div className="Back-end">
        <h2>Back End Proficiencies</h2>
        <ol className="skill2">
            <li>Node.js</li>
            <li>APIs</li>
            <li>Express.js</li>
            <li>SQL, Sequelize</li>
            <li>NoSQL, Mongoose</li>
            <li>React</li>
        </ol>
    </div>
    </>)
}
