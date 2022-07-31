import React from "react";
import mathews from "../images/mathews.svg";
import Digitaldesign from "../images/Digitaldesign.svg";
import more from "../images/more.svg";
import ui from "../images/MobUI.png";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Enlarge from "./Enlarge"

//function for adding

function Home() {
  // document.getElementsByClassName("row1")[0].addEventListener("hover", function() {alert("hi")});
  return (
    <div class='homepage  w-full h-full'>
      <Link to='/typeof'>
        <motion.img
          //    drag
          // dragConstraints={{
          //   top: -50,
          //   left: -50,
          //   right: 50,
          //   bottom: 50,
          // }}
          className='Homerows dd row1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] hover:shadow-2xl row1 
        bg-[#04be6e] 

        '
          onHoverStart={() => {
            // alert("hi");
            document.getElementById("mg").style.transform = "translateX(15px)";
          }}
          onHoverEnd={() => {
            document.getElementById("mg").style.transform = "translateX(-15px)";
          }}
          style={{ objectFit: "cover" }}
          src={Digitaldesign}
          alt='mathews'
        />
      </Link>
      <Link to={`/motiongraphics`}>
        <div className=''>
          <motion.img
            id='mg'
            className='Homerows mg  bg-[#64689f]  row2 '
            src={more}
            alt='mathews'
            onHoverStart={() => {
              document.getElementById("ui").style.transform = "translateX(3%)";
            }}
            onHoverEnd={() => {
              document.getElementById("ui").style.transform = "translateX(-3%)";
            }}
          />
        </div>
      </Link>
      <Link to='/greetingcards'>
        <div className=''>
          <motion.img
            id='ui'
            className='Homerows brightness-125 ui row3 bg-[#ae3236] '
            src={ui}
            alt='mathews'
            onHoverStart={() => {
              // alert("hell");
              document.getElementById("ui").style.transform = "translateX(-4%)";
            }}
            onHoverEnd={() => {
              document.getElementById("ui").style.transform = "translateX(4%)";
            }}
          />
        </div>
      </Link>
      <Link to={`/about`}>
        <motion.img
          id='row4'
          className='Homerows about  row4 bg-[#fafafa] '
          src={mathews}
          alt='mathews'
        />
      </Link>
      {/* <Enlarge/> */}
    </div>
  );
}

export default Home;
