import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Social from './components/social';
import About from './components/about';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App text-center">
      <About />
      <Portfolio />
      <Social />
    </div>
  );
}

export default App;