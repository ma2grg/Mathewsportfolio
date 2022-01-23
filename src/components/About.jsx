import React from "react";
import Mathewspic from "../images/Mathewspic.svg";
import c1 from "../images/c1.svg";
import c2 from "../images/c2.svg";
import c3 from "../images/c3.svg";
import c4 from "../images/c4.svg";
import c6 from "../images/c6.svg";
import c5 from "../images/c5.svg";
import tools from "../images/tools.svg";
import "../App.css";
import Sidebar from "./Sidebar";

function About() {
  const [state,setState]=React.useState(false);
  //const [open,setopen]=React.useState(false)
  if(window.innerWidth>=600){
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      //let y=e.clientY;
      let xpos = x / window.innerWidth;
    //  let ypos=y/window.innerHeight;
      //console.log(xpos,ypos);
      if (xpos > 0.75 && x>500) {
        setState(1);
        // console.log(state);
        //  return true;
      } else setState(0);
    });}
  
  return (

    <div className='p-16 w-full dark:bg-[#111111]' style={{fontFamily:"Poppins"}}>
        <div className="fixed " style={{right:0,top:0,zIndex:100,display:`${state?"block":"none"}`,transition:"ease-in-out"}}>
        <Sidebar />
      </div>  <div className="absolute " style={{left:0,top:0,zIndex:100,display:`${state?"block":"none"}`,transition:"ease-in-out"}}>
        <Sidebar />
      </div>
      <section className='md:flex md:flex-row-reverse w-11/12 m-auto md:w-full '>
        <img alt="maths" src={Mathewspic} className='w-full md:w-3/5 h-full' />
        <div style={{ fontFamily: "poppins" }} className=' mt-10'>
          <p className='text-6xl font-normal dark:text-[#fafafa]'>
            I'm <br />{" "}
            <span className='text-6xl dark:text-[#fafafa]' style={{ fontWeight: "800" }} >
              Mathew George
            </span>
          </p>
          <p className='text-2xl   font-light  mt-2 dark:text-[#fafafa] font'>
            Co-founder of{" "}
            <span style={{ color: "#CA06C2" }}>Mages Studio Pvt. Ltd.</span>
          </p>
          <p className='mt-16 w-4/5 dark:text-[#fafafa]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sit delectus neque libero voluptatibus debitis sequi, labore quae
            quibusdam ut tempora similique repellat vitae dolorem consectetur
            aliquam? Fugit exercitationem dolor quasi expedita nam ab minus
            accusantium reprehenderit cum.
          </p>
        </div>
      </section>
      <section className='pt-12'>
        <p
          className='text-5xl dark:text-[#fafafa]'
          style={{ fontWeight: "700", fontFamily: "poppins" }}>
          So far so Good
        </p>
        <div className='flex flex-wrap justify-between items-center mt-16'>
          <img
            src={c1}
            alt=''
            className='p-3 clientlogo md:w-36 object-contain '
          />
          <img
            src={c2}
            alt=''
            className='p-3 clientlogo md:w-36  object-contain  '
          />
          <img
            src={c3}
            alt=''
            className='p-3 clientlogo md:w-36  object-contain h-14 '
          />
          <img
            src={c4}
            alt=''
            className='p-3 clientlogo md:w-36  object-contain h-14 '
          />
          <img
            src={c5}
            alt=''
            className='p-3 clientlogo md:w-36  object-contain h-1/12 '
          />
          <img
            src={c6}
            alt=''
            className='p-3 clientlogo md:w-36  object-contain h-1/12 '
          />
        </div>
        <p className='mt-8 dark:text-[#fafafa]' style={{ fontFamily: "poppins" }}>
          many more...
        </p>
      </section>
      <section className='pt-16 md:flex w-full justify-between'>
        <div className='md:w-1/2 w-full'>
          <p
            className='text-5xl dark:text-[#fafafa]'
            style={{ fontWeight: "700", fontFamily: "poppins" }}>
            Get in touch
          </p>

          <div className=' flex flex-col  mt-10 dark:text-[#999999]'>
            <>
              <label for='name'>Name</label>
              <input
                type='text'
                id='name'
                className='p-2 dark:bg-[#111111] border-[#000000] dark:border-[#FAFAFA] border-2 border-r-0 border-l-0 border-t-0'
                style={{
                  outlineWidth: 0,
                  // border: "1px solid black",
                  // borderColor: "black",
                  // borderRightWidth: "0px",
                  // borderLeftWidth: "0px",
                  // borderTopWidth: "0px",
                }}
              />
            </>
            <>
              <label className='py-2' for='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='p-2 dark:bg-[#111111] border-[#000000] dark:border-[#FAFAFA] border-2 border-r-0 border-l-0 border-t-0'
                style={{
                  outlineWidth: 0,
                  // border: "1px solid ",
                  // borderColor: "black",
                  // borderRightWidth: "0px",
                  // borderLeftWidth: "0px",
                  // borderTopWidth: "0px",
                }}
              />
            </>
            <>
              <label for='Message' className='pt-2'>
                Message
              </label>
              <input
                type='textarea'
                id='Message'
                className='p-2 dark:bg-[#111111] border-[#000000] dark:border-[#FAFAFA] border-2 border-r-0 border-l-0 border-t-0'
                style={{
                  outlineWidth: 0,
                  // border: "1px solid ",
                  // borderColor: "black",
                  // borderRightWidth: "0px",
                  // borderLeftWidth: "0px",
                  // borderTopWidth: "0px",
                }}
              />
            </>
            <>
              <input
                type='submit'
                className='bg-black mt-4 text-white md:w-1/4 p-2 my-4'></input>
            </>
          </div>
        </div>
        <div>
          <div>
            <p
              className='text-5xl dark:text-[#fafafa]'
              style={{ fontWeight: "700", fontFamily: "poppins" }}>
              Hands on
            </p>
            <img alt="" src={tools} className='w-2/3 m-auto md:m-1 mt-4 md:mt-10 h-full items-center' />
          </div>
        </div>
      </section>

      <footer className='flex justify-evenly items-center md:w-2/3 m-auto mt-24'>
        <a href='https://www.linkedin.com'>
          <p className='social dark:text-[#fafafa]'>LinkedIn</p>
        </a>{" "}
        <a href='https://www.linkedin.com'>
          <p className='social dark:text-[#fafafa]'>Instagram</p>
        </a>{" "}
        <a href='https://www.linkedin.com'>
          <p className='social dark:text-[#fafafa]'>Email</p>
        </a>{" "}
        <a href='https://www.linkedin.com'>
          <p className='social dark:text-[#fafafa]'>Dribble</p>
        </a>{" "}
        <a href='https://www.linkedin.com'>
          <p className='social dark:text-[#fafafa]'>Behance</p>
        </a>
      </footer>
    </div>
  );
}

export default About;
