// import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About';
import TypeOf from './components/Enlargecomponents/TypeOf';

function App() {
  return (
    <div className="p-0 noscrollbar" style={{fontfamily:"poppins"}}>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/typeof" element={<TypeOf />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
