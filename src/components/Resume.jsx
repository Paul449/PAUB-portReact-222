import { pdfjs } from "react-pdf";
import React, { useEffect, useState } from "react";
//function
export default function Resume(){
   const [download,setDownload] = useState(false);
   useEffect(() => {
    const pdfPath = "/src/Paul-Bilbatua-Resume.pdf";

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
    window.open("/src/Paul-Bilbatua-Resume.pdf", "_blank");
    setDownload(true);
};
    return(<>
    <div>
        <h2 id="resume-title">Resume</h2>
        <p id="download">Download my <button onClick={handleDownload} id="resumebtn">resume</button></p>
    </div>
    <div className="front-end">
        <h2>Front End Proficiencies</h2>
        <ol className="skill1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>Webpack</li>
            <li>Web API</li>
            <li>Git/GitHub/GitLab</li>
            <li>ReactJS</li>
            <li>Linux CLI</li>
        </ol>
    </div>
    <div className="Back-end">
        <h2>Back End Proficiencies</h2>
        <ol className="skill2">
            <li>MERN Stack</li>
            <li>Node.js</li>
            <li>APIs (REST/GraphQL)</li>
            <li>Express.js</li>
            <li>Jest</li>
            <li>SQL/PostgreSQL</li>
            <li>NoSQL/MongoDB</li>
        </ol>
    </div>
    </>)
}
