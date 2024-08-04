import React from "react";

//function
export default function Portfolio(){
return(<>
<div id="port-title">Portfolio</div>
<div className="projects">
    <div className="Project-1">
    <div className="image1">
    <a href="https://paul449.github.io/DexPlorer/">
        <img src="src/assets/Screenshot 2024-07-23 191438.png" alt="Calculator" width={180 + 'px'} height={180 + 'px'}></img>
        <p id="calculator">Dexplorer</p>
        </a>
        <div className="projectLink1">
        <img id='G1' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
        </div>
    </div>
    </div>
    <div className="Project-2">
    <div className="image2">
    <a href="https://message-central.onrender.com/">
        <img src="src/assets/Screenshot 2024-07-23 195643.png" alt="ChatApp" width={180 + 'px'} height={180 + 'px'}></img>
        <p>Messaging App</p>
    </a>
        <div className="projectLink2">
        <img id='G2' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
        </div>
    </div>
    </div>
    <div className="Project-3">
    <div className="image3">
        <a href="https://paul449.github.io/Pau-Weather-89/">
        <img src="src/assets/Screenshot 2024-07-23 200236.png" alt="weather" width={190 + 'px'} height={190 + 'px'}></img>
        <p>Weather App</p>
        </a>
        <div className="projectLink3">
        <img id='G3' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
        </div>
    </div>
    </div>
    <div className="Project-4">
    <div className="image4">
        <img src="src/assets/Screenshot 2024-07-23 200824.png" alt="Music" width={180 + 'px'} height={180 + 'px'}></img>
        <p>Vote4Goat</p>
        <div className="projectLink4">
        <img id='G4' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
        </div>
    </div>
    </div>

</div>
</>);
}
