import React from "react";

//function
export default function Portfolio() {
    return (
      <>
        <div id="port-title">Portfolio</div>
        <div className="projects">
          <div className="Project-1">
            <div className="image1">
              <a href="https://paul449.github.io/DexPlorer/">
                <img src="./assets/Screenshot%202024-07-23%20191438.png" alt="PokemonEncyclopedia" width={180} height={180} />
                <p id="calculator">Dexplorer</p>
              </a>
              <div className="projectLink1">
                <img id='G1' width={30} height={30} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo' />
              </div>
            </div>
          </div>
          <div className="Project-2">
            <div className="image2">
              <a href="https://message-central.onrender.com/">
                <img src="./assets/Screenshot%202024-07-23%20195643.png" alt="ChatApp" width={180} height={180} />
                <p>Messaging App</p>
              </a>
              <div className="projectLink2">
                <img id='G2' width={30} height={30} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo' />
              </div>
            </div>
          </div>
          <div className="Project-3">
            <div className="image3">
              <a href="https://paul449.github.io/Pau-Weather-89/">
                <img src="./assets/Screenshot%202024-07-23%20200236.png" alt="weather" width={190} height={190} />
                <p>Weather App</p>
              </a>
              <div className="projectLink3">
                <img id='G3' width={30} height={30} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo' />
              </div>
            </div>
          </div>
          <div className="Project-4">
            <div className="image4">
              <img src="./assets/Screenshot%202024-07-23%20200824.png" alt="Basketball Voter" width={180} height={180} />
              <p>Vote4Goat</p>
              <div className="projectLink4">
                <img id='G4' width={30} height={30} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo' />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
