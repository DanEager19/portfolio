import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Social from './components/social';
import About from './components/about';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <About />
      <br />
      <br />
      <Portfolio />
      <br />
      <br />
      <Social />
    </div>
  );
}

export default App;