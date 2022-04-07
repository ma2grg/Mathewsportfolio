import React, { useState } from "react";
import Brandsimg from "../../images/brands.svg";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import arrow2 from "../../images/arrowup.svg";
import { Squash as Hamburger } from 'hamburger-react'
import Sidebar from "../Sidebar";
import "../../App.css";

function Brands() {
  const [open, setopen] = React.useState(false);
  const [state, setState] = React.useState(0);
  // const [isOpen, setOpen] = useState(false)

  console.log("open", open);

  React.useEffect(() => {
    if (window.innerWidth >= 600) {
      document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        //let y=e.clientY;
        let xpos = x / window.innerWidth;
        //  let ypos=y/window.innerHeight;
        //console.log(xpos,ypos);
        if (xpos > 0.75 && x > 500) {
          setState(1);
          // console.log(state);
          //  return true;
        } else setState(0);
      });
    }
  });
  //const hamm=()=>{setopen(!open)}
  return (
    <motion.div
      animate={{ x: [0, 20, 0] }}
      transition={{ delay: 0.1 }}
      className=' md:flex md:flex-row-reverse w-full h-full dark:bg-[#111111]'
      style={{ height: "100vh", fontFamily: "poppins" }}>
        <div className="fixed p-2 dark:text-[#FAFAFA] hidden md:flex" style={{left:0,zIndex:100,display:`${!state?"block":"none"}`,transition:"ease-in-out"}}>
       <Link to="/projects"> /projects</Link>
      </div>
      <div className='md:hidden '>
        <Hamburger
        direction="left"
        duration={0.8}
         toggled={open} toggle={setopen} 
          className='bhm flex md:hidden dark:bg-[#a79b9b]'
          color="#a79b9b"
           
        />
        {/* <Sidebar /> */}
      </div>
      {open ? (
        <div className='absolute'>
          {" "}
          <Sidebar mobile={true} />
        </div>
      ) : null}{" "}
      {state ? (
        <div
          className='absolute'
          style={{
            right: 0,
            zIndex: 1000,
            display: `${state ? "block" : "none"}`,
            transition: "ease-in-out",
          }}>
          <Sidebar />
        </div>
      ) : null}
      <div className=' ' style={{ flex: 1 ,objectFit:"cover"}}>
        <img
          src={Brandsimg}
          alt='brand'
          className='shadow-xl w-full mt-10 md:mt-0 md:h-full object-cover'
        />
      </div>
      <div className='md:w-1/3 mt-12 shadow-xl md:mt-32 flex flex-col px-6 justify-center md:pb-16 md:justify-end '>
        <p className='text-4xl md:text-5xl dark:text-white' style={{ fontWeight: 800 }}>
          Brand style
          <br />
          guideline
        </p>
        <p className='mt-2 text-xl dark:text-gray-300 text-gray-600'>A type layout experiment</p>
        <div className='py-2'>

        <Link to='/greetingcards' className='w-full'>
          <img
            src={arrow2}
            alt=''
            className='w-8   h-8 dark:bg-white  rounded-full'
            style={{ float: "right" }}
          />
        </Link>

        <div className='flex items-center justify-between mt-16 '>
          <Link to='/projects'>
            {" "}
            <p  className='text-xl dark:text-white' style={{ textDecoration: "underline" }}>View Project</p>
          </Link>
          <Link to='/typeof'>
            {" "}
            <img src={arrow} alt='arrow' className='dark:bg-white w-8 h-8  rounded-full' />
          </Link>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default Brands;
