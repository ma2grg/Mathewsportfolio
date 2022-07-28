import React, { useEffect } from "react";
import p1 from "../images/projects/p1.svg";
import p2 from "../images/projects/p2.svg";
import p3 from "../images/projects/p3.svg";
import p4 from "../images/projects/p4.svg";
import p5 from "../images/projects/p5.svg";
import p6 from "../images/projects/p6.svg";
import p7 from "../images/projects/p7.svg";
import p8 from "../images/projects/p8.svg";
import p9 from "../images/projects/p9.svg";
import p10 from "../images/projects/p10.svg";
import p11 from "../images/projects/p11.svg";
import p12 from "../images/projects/p12.svg";
import p13 from "../images/projects/p13.svg";
import p14 from "../images/projects/p14.svg";
import p15 from "../images/projects/p15.svg";
import p16 from "../images/projects/p16.svg";
import p17 from "../images/projects/p17.svg";
import p18 from "../images/projects/p18.svg";
import p19 from "../images/projects/p19.svg";
import p20 from "../images/projects/p20.svg";
import Sidebar from "../components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hamburger from "hamburger-react";
import { Link, useParams } from "react-router-dom";
// import {  } from "module";
import { project2, project4, projectrave } from "./projects.js";
// console.log(images);

const findproject = (prm) => {
  console.log(prm.projects);
  if (prm.projects === "42") {
    return project4;
  }
  if (prm.projects === "4") return project2;
  if (prm.projects === "21") return projectrave;
  return project2;
};

function Projects() {
  const params = useParams();
  const images = findproject(params);

  console.log(params);
  let url = params.projects;
  console.log(url, url, url);
  let linked = "/typeof";
  let url2 = "branding";
  if (url === "1") {
    url2 = "branding";
    linked = "/brands";
  } else if (url === "2") {
    url2 = "Greeting Card";
    linked = "/greetingcards";
  } else if (url === "3") {
    url2 = "Motion Graphics";
    linked = "/motiongraphics";
  } else if (url === "4") {
    url2 = "Type Of";
    linked = "/typeof";
  } else if (url === "42") {
    url2 = "Type Of";
    linked = "/typeof";
    
  }
  else if(url==="21") {
    url2="Branding";
    linked="/motiongraphics"
  }

  const [state, setState] = React.useState(false);
  const [open, setopen] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // let mousepo=document.addEventListener("mousemove",(e)=>{
  //   let x=e.clientX;
  //   let y=e.clientY;
  //   let xpos=x/window.innerWidth;
  //   let ypos=y/window.innerHeight;
  //   console.log(xpos,ypos);
  //   if (xpos>0.85) {
  // //alert("hi")
  //    return true;
  //   }
  //   else return false
  // })

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

  return (
    <div className='w-full relative bg-white  '>
      <div
        className='fixed '
        style={{
          right: 0,
          zIndex: 100,
          display: `${state ? "block" : "none"}`,
          transition: "ease-in-out",
        }}>
        <Sidebar />
      </div>
      <div
        className='text-sm md:text-lg p-4 bg-white  text-[#111111] hidden md:flex fixed top-0 w-full  md:bg-transparent'
        style={{
          left: 0,
          zIndex: 100,
          fontWeight: 500,
          fontFamily: "poppins",
          background: "white",
          display: `${!state ? "block" : "none"}`,
          transition: "ease-in-out",
        }}>
        <Link
          to='/'
          className='  md:inline border-2 rounded-3xl px-2 border-black hover:bg-black hover:text-white'>
          {" "}
          Home
        </Link>

        <Link
          to={`${linked}`}
          className='border-2 border-black px-2 mx-2 rounded-3xl hover:bg-black hover:text-white'>
          {" "}
          {url2}
        </Link>
        {/* <Link
          to='/typeof'
          className='border-2 border-black rounded-3xl px-2 hover:bg-black hover:text-white'>
          {" "}
          Social Media Post
        </Link> */}
      </div>
      <div className='md:hidden  ' style={{ zIndex: 111, marginLeft: "85%" }}>
        <Hamburger
          toggle={() => {
            setopen(!open);
          }}
          toggled={open}
          className='bhm flex md:hidden mt-4'
          style={{ marginLeft: "85%" }}
        />
        {/* <Sidebar /> */}
      </div>
      {open ? (
        <div className='absolute'>
          {" "}
          <Sidebar />
        </div>
      ) : null}
      <div
        className='absolute w-full mt-8'
        style={{ left: "50%", transform: "translate(-50%)" }}>
        {images.map((image, index) => {
          return (
            <div className=' mt-4' data-aos='fade-up' key={index}>
              <img
                draggable={false}
                src={image}
                key={index}
                alt={index}
                className='w-4/5  m-auto  py-4 '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
