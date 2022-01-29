import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Social from './components/social';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App flex-wrap">
      <div className='flex-outer' />
      <div className='flex-inner'>
        <About />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <Social />
        <br />
        <Resume />
      </div>
      <div className='flex-outer' />
    </div>
  );
}

export default App;