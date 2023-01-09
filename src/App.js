import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import About from './pages/About'


export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
  
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}


