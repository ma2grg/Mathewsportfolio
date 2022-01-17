import React from "react";
import p1 from "../images/p1.svg";
import p2 from "../images/p2.svg";
import p3 from "../images/p3.svg";
import p4 from "../images/p4.svg";
import p5 from "../images/p5.svg";
import p6 from "../images/p6.svg";
import p7 from "../images/p7.svg";
import p8 from "../images/p8.svg";
import p9 from "../images/p9.svg";
import p10 from "../images/p10.svg";
import p11 from "../images/p11.svg";
import p12 from "../images/p12.svg";
import p13 from "../images/p13.svg";
import p14 from "../images/p14.svg";
import p15 from "../images/p15.svg";
import p16 from "../images/p16.svg";
import p17 from "../images/p17.svg";
import p18 from "../images/p18.svg";
import p19 from "../images/p19.svg";
import p20 from "../images/p20.svg";
import Sidebar from "../components/Sidebar";
import AOS from 'aos';


const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
];
function Projects() {
  const [state,setState]=React.useState(false);
  React.useEffect(() => {
    AOS.init({
      duration : 2000
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
    React.useEffect(()=>{
      document.addEventListener("mousemove",(e)=>{
        let x=e.clientX;
        //let y=e.clientY;
        let xpos=x/window.innerWidth;
        //let ypos=y/window.innerHeight;
        //console.log(xpos,ypos);
        if (xpos>0.75) {
          setState(1)
          console.log(state)
        //  return true;
        }
        else setState(0)
      })

    },[state])
  return (
    <div className='w-full relative bg-gray-100' style={{ backgroundColor: "#f3f4f6" }}>
      <div className="absolute" style={{right:0,display:`${state?"block":"none"}`,transition:"ease-in-out"}}>
        <Sidebar />
      </div>
      <div className="absolute">
      {images.map((image, index) => {
        return (
          <div           data-aos="fade-up-left"
          >
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
