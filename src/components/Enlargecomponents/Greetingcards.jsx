import React from "react";
import greetings from "../../images/Greetingcard.svg";
import arrow from "../../images/arrow.svg";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
function GreetingCard() {
  return (
    <motion.div   animate={{ x: [0, 20, 0] }}
    transition={{ delay: 0.1 }}
    className=' md:flex md:flex-row-reverse w-full h-full '
    style={{ height: "100vh", fontFamily: "poppins" }}>
         <div className='' style={{flex:1,backgroundColor:"#b03338"}}>
      <img src={greetings} alt=''           className='w-full mt-10 md:mt-0 md:h-full'
 /* style={{ height: "100vh" }}  */
      />
    </div>
      <div className='md:w-1/3 mt-12 md:mt-32 flex flex-col px-6 justify-center'>
        <p className='text-4xl md:text-5xl' style={{ fontWeight: 800 }}>
          Greeting
          <br />
          cards
        </p>
        <p className='mt-2'>A type layout experiment</p>
        <div className='flex items-center justify-between mt-16 '>
          <p style={{ textDecoration: "underline" }}>View Project</p>
    <Link to="/brands">      <img src={arrow} alt='arrow' className='w-8 h-8' /></Link>
        </div>
      </div>
    </motion.div>
  );
}

export default GreetingCard;
