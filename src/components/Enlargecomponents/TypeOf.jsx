import React from "react";
import typeofi from "../../images/typeof.svg";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import {motion} from "framer-motion"
function TypeOf() {
  return (
    <motion.div   animate={{ x: [0, 20, 0] }}
    transition={{ delay: 0.1 }}
      className=' md:flex md:flex-row-reverse w-full h-full '
      style={{ height: "100vh", fontFamily: "poppins" }}>
          <div className=' ' style={{ flex: 1, backgroundColor: "#00be6e" }}>
        <img
          src={typeofi}
          alt=''
          className='w-full mt-10 md:mt-0 md:h-full'
          // style={{ height: "100vh" }}
        />
      </div>
      <div className='md:w-1/3 mt-12 md:mt-32 flex flex-col px-6 justify-center'>
        <p className=' text-4xl md:text-5xl' style={{ fontWeight: 800 }}>
          Type of <br />
          type
        </p>
        <p className='mt-2'>A type layout expirement</p>
        <div className='flex items-center justify-between mt-16 '>
        <Link to="/projects"> <p style={{ textDecoration: "underline" }}>View Project</p></Link>
         <Link to="/greetingcards"> <img src={arrow} alt='arrow' className='w-8 h-8' />
   </Link>     </div>
      </div>
    
    </motion.div>
  );
}

export default TypeOf;
