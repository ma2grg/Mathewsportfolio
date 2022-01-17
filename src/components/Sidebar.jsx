import React from "react";
import dribble from "../images/dribbble.svg";
import gmail from "../images/gmail.svg";
import insta from "../images/insta.svg";
import LinkedIn from "../images/LinkedIn.svg";
import behance from "../images/behance.svg";
//const imagess = [dribble, gmail, insta, LinkedIn, behance];

function Sidebar() {
  return (
    <div
      className='bg-white  relative hidden md:block'

      style={{ height: "100vh", width: "25vw", zIndex: 100 ,fontFamily:"poppins"}}>
          <>
      <p style={{ fontWeight: 800 }} className='text-2xl'>
        Home
      </p>
      <p style={{ fontWeight: 800 }} className='text-2xl'>
        Projects
      </p>
      <p style={{ fontWeight: 800 }} className='text-2xl'>
        About
      </p>
      </>
      <div className='flex'>
        <img src={insta} alt='' className='w-8  m-2 h-8' />
        <img src={LinkedIn} alt='' className='w-8  m-2 h-8' />
        <img src={gmail} alt='' className='w-8  m-2 h-8' />
        <img src={dribble} alt='' className='w-8  m-2 h-8' />
        <img src={behance} alt='' className='w-8  m-2 h-8' />
      </div>
    </div>
  );
}

export default Sidebar;
