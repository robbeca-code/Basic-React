import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Inputs from './pages/Inputs';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/About">About</Link> | <Link to="/Counter">Counter</Link> | <Link to="/Inputs">Inputs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Counter" element={<Counter />}/>
        <Route path="/Inputs" element={<Inputs />}/>
      </Routes>
    </div>
  );
}

export default App;
