import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css'
function App() {
  const [Tab, setTab] = useState('AboutMe');

  const renderContent = () => {
    switch (Tab) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className='wrapper'>
      <header>
        <ul className='nav-list'>
          <li><button onClick={() => setTab('AboutMe')}>About Me</button></li>
          <li><button onClick={() => setTab('Contact')}>Contact</button></li>
          <li><button onClick={() => setTab('Portfolio')}>Portfolio</button></li>
          <li><button onClick={() => setTab('Resume')}>Resume</button></li>
        </ul>
      </header>
      <div className='content'>
        {renderContent()}
      </div>
      <footer>
        <a href='https://github.com/Paul449'>
          <img width={50} height={50} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='GitHub logo' />
        </a>
        <a href='https://www.linkedin.com/in/paul-bilbatua-6b4876232/'>
          <img width={50} height={50} src='https://www.svgrepo.com/show/922/linkedin.svg' alt='LinkedIn logo' />
        </a>
        <a href='https://stackoverflow.com/users/23615930/paul-biro'>
          <img width={50} height={50} src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg' alt='Stack Overflow logo' />
        </a>
      </footer>
    </div>
  );
}

export default App;
/*
 <img src ="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='github icon' width={em}/>
      <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt='linkedlin icon' />
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt='stackOverFlow icon'  />
*/