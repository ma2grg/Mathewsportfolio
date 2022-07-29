// import logo from './logo.svg';
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About";
import TypeOf from "./components/Enlargecomponents/TypeOf";
import Motiongraphic from "./components/Enlargecomponents/Motiongraphic";
import GreetingCard from "./components/Enlargecomponents/Greetingcards";
import Projects from "./components/Projects.jsx";
import ProjectContainer from"./components/ProjectContainer"
import Brands from "./components/Enlargecomponents/Brand";
import Brands1 from "./components/Branding/1.jsx";
import Brands2 from "./components/Branding/2.jsx";
import Brands3 from "./components/Branding/1.jsx";

import DD1 from "./components/DigitalDesign/1.jsx";
import Bjrands2 from "./components/Branding/1.jsx";
import Brjands3 from "./components/Branding/1.jsx";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    let d = new Date();
    let hour = d.getHours();
    if (hour >= 7 && hour <= 17) {
      setState(false);
    } else setState(true);
  }, []);

  return (
    <div
      className={`p-0 noscrollbar ${!state ? "dark" : ""}  `}
      style={{ fontfamily: "poppins" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/typeof' element={<TypeOf />} />
        {/* <Route path="/typeof/:id" element={}></Route> */}
        <Route path='/brand1' element={<Brands1 />} />
        <Route path='/brand2' element={<Brands2 />} />
        <Route path='/brand3' element={<Brands3 />} />

        <Route path='/digitaldesign1' element={<DD1 />} />




        <Route path="/projectsbucket/:id" element={<ProjectContainer />} />

        <Route path='/motiongraphics' element={<Motiongraphic />} />
        <Route path='/greetingcards' element={<GreetingCard />} />
        <Route path='/projects' element={<Projects />}>
          <Route path=':projects' element={<Projects />} />
        </Route>
        <Route path='/brands' element={<Brands />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
