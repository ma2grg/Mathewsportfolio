import React from "react";
import mathews from "../images/mathews.svg";
import Digitaldesign from "../images/Digitaldesign.svg";
import more from "../images/more.svg";
import motiongraphics from "../images/motiongraphic.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class='homepage flex flex-row relative w-full h-full'>
      <Link to="/typeof">
      <img
        className='Homerows    row1 absolute'
        src={Digitaldesign}
        alt='mathews'
      />
      </Link>
      <div className=''>
        <img className='Homerows   row2 absolute' src={more} alt='mathews' />
      </div>
      <img
        className='Homerows   row3 absolute'
        src={motiongraphics}
        alt='mathews'
      />
      <Link to={`/about`}>
      <img className='Homerows  row4 absolute' src={mathews} alt='mathews' />
   </Link>
    </div>
  );
}

export default Home;
