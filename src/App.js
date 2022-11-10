// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
