import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Social from './components/social';
import About from './components/about';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App flex-wrap">
      <div className='flex-outer' />
      <div className='flex-inner'>
        <About />
        <br />
        <br />
        <Portfolio />
        <br />
        <br />
        <Social />
        <br />
      </div>
      <div className='flex-outer' />
    </div>
  );
}

export default App;