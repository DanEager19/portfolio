import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Social from './components/social';
import About from './components/about';

function App() {
  return (
    <div className="App text-center">
      <About />
      <Social />
    </div>
  );
}

export default App;