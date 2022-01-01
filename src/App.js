import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Contact } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo">
            Fiyi <br /> Oladimeji
          </div>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
