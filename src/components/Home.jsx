import React from "react";
import mathews from "../images/mathews.svg";
import Digitaldesign from "../images/Digitaldesign.svg";
import more from "../images/more.svg";
import ui from "../images/motiongraphic.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div class='homepage  w-full h-full'>
      <Link to="/typeof">
      <motion.img 
    //    drag
    // dragConstraints={{
    //   top: -50,
    //   left: -50,
    //   right: 50,
    //   bottom: 50,
    // }}
        className='Homerows   row1 shadow-inner

        '
        src={Digitaldesign}
        alt='mathews'
      />
      </Link>
      <Link to={`/motiongraphics`}>
      <div className=''>
        <img className='Homerows    row2 ' src={more} alt='mathews' />
      </div>
      </Link>
      <Link to="/greetingcards">
      <img
        className='Homerows   row3 '
        src={ui}
        alt='mathews'
      />
      </Link>
      <Link to={`/about`}>
      <img className='Homerows  row4 ' src={mathews} alt='mathews' />
   </Link>
    </div>
  );
}

export default Home;
