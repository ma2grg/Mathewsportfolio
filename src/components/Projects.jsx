import React, { useEffect } from "react";

import Sidebar from "../components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hamburger from "hamburger-react";
import { Link, useParams } from "react-router-dom";
// import {  } from "module";
import {
  bruv,
  cards,
  mages,
  project2,
  project4,
  projectrave,
} from "./projects.js";
// console.log(images);

const findproject = (prm) => {
  console.log(prm.projects);
  if (prm.projects === "42") {
    return project4;
  }
  if (prm.projects === "4") return project2;
  if (prm.projects === "21") return projectrave;
  if (prm.projects === "22") return mages;
  if (prm.projects === "23") return cards;
  if (prm.projects === "31") return bruv;
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
  if (url === "23" || url === "4" || url === "42") {
    url2 = "Digital Design";
    linked = "/typeof";
  } else if (url === "22" || url === "21") {
    url2 = "Branding";
    linked = "/motiongraphics";
  } else {
    url2 = " UI/UX ";
    linked = "/greetingcards";
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
          className=' font-500 md:inline border-2 rounded-3xl px-2 border-black hover:bg-black hover:text-white'>
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
        <div className='absolute right-0'>
          {" "}
          <Sidebar />
        </div>
      ) : null}
      <div
        className='absolute w-full mt-8'
        style={{ left: "50%", transform: "translate(-50%)" }}>
        {images.map((image, index) => {
          return (
            <div className=' mt-4 shado' data-aos='fade-up' key={index}>
              <img
                draggable={false}
                src={image}
                key={index}
                alt={index}
                // loading="lazy"
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
