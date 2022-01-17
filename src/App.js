// import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About';
import TypeOf from './components/Enlargecomponents/TypeOf';
import Motiongraphic from './components/Enlargecomponents/Motiongraphic';
import GreetingCard from './components/Enlargecomponents/Greetingcards';
import Projects from './components/Projects';
import Brands from './components/Enlargecomponents/Brand';

function App() {
  return (
    <div className="p-0 noscrollbar" style={{fontfamily:"poppins"}}>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/typeof" element={<TypeOf />} />
         <Route path="/motiongraphics" element={<Motiongraphic />} />
         <Route path="/greetingcards" element={<GreetingCard />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/brands" element={<Brands />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
