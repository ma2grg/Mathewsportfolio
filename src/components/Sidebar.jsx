import React from "react";
import dribble from "../images/dribbble.svg";
import gmail from "../images/gmail.svg";
import insta from "../images/insta.svg";
import LinkedIn from "../images/LinkedIn.svg";
import behance from "../images/behance.svg";
import { Link } from "react-router-dom";
import "../App.css"
//const imagess = [dribble, gmail, insta, LinkedIn, behance];

function Sidebar() {
  return (
    <div
      className='sidebarr bg-white drop-shadow-2xl shadow-3xl relative h-full  flex flex-col justify-center items-center'
      style={{
        
        zIndex: 100,
        fontFamily: "poppins",
        transition: "200ms ease-in-out",
      }}>
      <div
        className='flex flex-col items-end justify-center'
        style={{ flex: 0.85 }}>
          <Link to="/">
        <p style={{ fontWeight: 800 }} className='p-2 text-4xl hover:text-gray-500'>
          Home
        </p>
        </Link>
        <Link to="/projects">
        <p style={{ fontWeight: 800 }} className='p-2 text-4xl hover:text-gray-500'>
          Projects
        </p>
        </Link>
        <Link to="/about">
        <p style={{ fontWeight: 800 }} className='text-4xl p-2 hover:text-gray-500'>
          About
        </p>
        </Link>
      </div>
      <div>
        <div className='flex'>
          <img
            src={insta}
            alt=''
            className='w-8  m-2 h-8 hover:bg-gray-800'
            fill='red'
          />
          {/* <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-red-500">
<path d="M12.4969 8.33156C10.2016 8.33156 8.32843 10.2047 8.32843 12.5C8.32843 14.7953 10.2016 16.6684 12.4969 16.6684C14.7922 16.6684 16.6653 14.7953 16.6653 12.5C16.6653 10.2047 14.7922 8.33156 12.4969 8.33156ZM24.9991 12.5C24.9991 10.7738 25.0147 9.0633 24.9178 7.34026C24.8208 5.33891 24.3643 3.56271 22.9008 2.09922C21.4342 0.632607 19.6611 0.179176 17.6597 0.082235C15.9336 -0.0147055 14.223 0.000930141 12.5 0.000930141C10.7738 0.000930141 9.0633 -0.0147055 7.34026 0.082235C5.33891 0.179176 3.56271 0.635734 2.09922 2.09922C0.632607 3.56584 0.179176 5.33891 0.082235 7.34026C-0.0147055 9.06643 0.000930141 10.777 0.000930141 12.5C0.000930141 14.223 -0.0147055 15.9367 0.082235 17.6597C0.179176 19.6611 0.635734 21.4373 2.09922 22.9008C3.56584 24.3674 5.33891 24.8208 7.34026 24.9178C9.06643 25.0147 10.777 24.9991 12.5 24.9991C14.2262 24.9991 15.9367 25.0147 17.6597 24.9178C19.6611 24.8208 21.4373 24.3643 22.9008 22.9008C24.3674 21.4342 24.8208 19.6611 24.9178 17.6597C25.0178 15.9367 24.9991 14.2262 24.9991 12.5ZM12.4969 18.9137C8.9476 18.9137 6.08316 16.0493 6.08316 12.5C6.08316 8.95073 8.9476 6.08629 12.4969 6.08629C16.0461 6.08629 18.9106 8.95073 18.9106 12.5C18.9106 16.0493 16.0461 18.9137 12.4969 18.9137ZM19.1733 7.3215C18.3446 7.3215 17.6754 6.6523 17.6754 5.82361C17.6754 4.99493 18.3446 4.32573 19.1733 4.32573C20.0019 4.32573 20.6711 4.99493 20.6711 5.82361C20.6714 6.02039 20.6328 6.21528 20.5576 6.39712C20.4824 6.57897 20.3721 6.74419 20.233 6.88333C20.0938 7.02247 19.9286 7.1328 19.7468 7.20798C19.5649 7.28317 19.37 7.32175 19.1733 7.3215Z" fill="black"/>
</svg> */}

       
          <img src={LinkedIn} alt='' className='w-8  m-2 h-8' />
          <img src={gmail} alt='' className='w-8  m-2 h-8' />
          <img src={dribble} alt='' className='w-8  m-2 h-8' />
          <img src={behance} alt='' className='w-8  m-2 h-8' />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
