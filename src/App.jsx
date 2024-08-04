import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css'
function App() {
  //use state for current tab
 const [Tab, setTab] = useState(0)
// conditional statements
function Tabs(){
  if(Tab === 'AboutMe'){
    return <AboutMe/>
  } else if(Tab === 'Contact'){
    return <Contact/>
  } else if(Tab === 'Portfolio'){
    return <Portfolio/>
  } 
    return <Resume/>
  
}
  return(<>
<div className='wrapper'>
      <header>
        <ul className='nav-list'>
        <li id='One'><button id='AM' onClick={()=> setTab('AboutMe')}>About Me</button></li>
        <li id='Two'><button id='C' onClick={()=> setTab('Contact')}>Contact</button></li>
        <li id='Three'><button id='P' onClick={()=> setTab('Portfolio')}>Portfolio</button></li>
        <li id='Fourth'><button id='R' onClick={()=> setTab('Resume')}>Resume</button></li>
        </ul>
      </header>
      <div className='content'>
        {Tabs()}
      </div>
      <footer>
      <a href='https://github.com/Paul449'>
      <img id='G' width={50 + 'px'} height={50 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
      </a>
      <a href='https://www.linkedin.com/in/paul-bilbatua-6b4876232/'>
      <img id='L' width={50 + 'px'} height={50 + 'px'} src='https://www.svgrepo.com/show/922/linkedin.svg' alt='linkedlin logo'></img>
      </a>
      <a href='https://stackoverflow.com/users/23615930/paul-biro'>
      <img id='S' width={50 + 'px'} height={50 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg' alt='stackoverflow'></img>
      </a>
      </footer>
    </div>
  </>)
}

export default App
/*
 <img src ="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='github icon' width={em}/>
      <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt='linkedlin icon' />
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt='stackOverFlow icon'  />
*/