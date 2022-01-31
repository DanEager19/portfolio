import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Social from './components/social';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Copyright from './components/copyright';


function App() {
  return (  
    <div className="App flex-wrap">

      <div className='flex-outer' />

      <div className='flex-inner row'>

        <div className='section row-md-4'>
          <About />
        </div>

        <div className='section row-md-4'>
          <h2 className='text-center'>What I've Made</h2>
          <Projects />
        </div>

        <div className='section row-md-4'>
          <h2 className='text-center'>What I Use</h2>
          <Resume />
        </div>

        <div className='section row-md-4'>
          <Social />
        </div>

        <div className='section row-md-4'>
          <Copyright />
        </div>

      </div>

      <div className='flex-outer' />

    </div>
  );
}

export default App;