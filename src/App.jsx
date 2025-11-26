import React, {useState} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const App = () => {

  let [showContent, setContent] = React.useState(false);

  // GSAP Animation
  useGSAP(() => {
    const tl = gsap.timeline();
       tl.to(".vi-mask-group", {
        rotate: 10,
        ease: "power4.inOut",
        duration: 2,
        transformOrigin: "50% 50%",

       }).to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function() {
          if (this.progress() >= 0.9) {
            document.querySelector("svg").remove();
            setContent(true);
            this.kill();
          }
        }


      });
      });

  return (
    <>
     {!showContent && (
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      )}
      {showContent && (
        <div className="main w-full ">
          <div className="landing relative w-full h-screen bg-black">
             <div className='imagesdiv w-full h-screen'>
              <img  className='absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="sky" />
              <img className='absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="bg" />
              <img className='absolute -bottom-[55%] left-1/2 -translate-x-1/2 scale-[0.7] ' src="./girlbg.png" alt="girlbg" />
             </div>
          </div>
        </div>
        )
      }
   
     
    </>
  );
};

export default App;
