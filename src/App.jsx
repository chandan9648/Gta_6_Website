import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

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
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector("svg").remove();
          setContent(true);
          this.kill();

        }
      }
    });
    //for flip effect
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",

    });

    gsap.to(".sky", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",


    });

    gsap.to(".bg", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",

    });



    const main = document.querySelector('.main');
    //mouse move effect trigger
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to('.main .text', {
        x: `${xMove * 0.4}%`,
      });
      gsap.to('.bg', {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);


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

        <div className="main w-full rotate-[-10deg] scale-[1.6]">
          <div className="landing  w-full h-screen bg-black">
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-6 px-10'>
              <div className='logo flex gap-5'>
                <div className='lines flex flex-col gap-1 mt-2'>
                  <div className='line w-12 h-1 bg-white'></div>
                  <div className='line w-8 h-1 bg-white'></div>
                  <div className='line w-6 h-1 bg-white'></div>
                </div>
                <h3 className='text-3xl text-white'>Rockstar</h3>

              </div>
            </div>
            <div className='imagesdiv absolute w-full overflow-hidden h-screen'>
              <img className='absolute sky top-0 scale-[1.2] rotate-[-20deg] left-0 w-full h-full object-cover' src="./sky.png" alt="sky" />
              <img className='absolute scale-[1.8] rotate-[-10deg] bg top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="bg" />

              <div className="text text-white flex flex-col gap-3 absolute top-30 left-1/2 -translate-x-1/2 scale-[1.4]">
                <h1 className="text-[6rem] leading-none -ml-10">grand</h1>
                <h1 className="text-[6rem] leading-none ml-20">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-10">auto</h1>
              </div>

              <img className='absolute -bottom-[55%] left-1/2 -translate-x-1/2 scale-[0.7]  ' src="./girlbg.png" alt="girlbg" />
            </div>
            <div className='btmbar text-white absolute w-full bottom-0 left-0 py-12 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className='flex gap-4 items-center'>
                <i className="text-xl ri-arrow-down-line cursor-pointer"></i>
                <h3 className=''>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
            </div>
          </div>

          {/*Second Section*/}
          <div className='w-full h-full flex  items-center justify-center bg-black'>
            <div className="cntr flex text-white w-full h-[40%] ">
              <div className='limg relative w-1/2 h-screen'>
                <img className='absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="./imag.png" alt="imag" />
              </div>
              <div className="rg w-[37%] py-20">
                <h1 className='text-8xl'>Still running,</h1>
                <h1 className='text-8xl'>Not Hunting</h1>
                <p className='mt-10 text-md font-[helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quos minus, totam dignissimos eos repellendus corrupti modi error quibusdam quis aliquam maiores nihil, quaerat voluptatum quasi nisi eius, consequatur dolor?</p>
                <p className='mt-5 text-md  font-[helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quos minus, totam dignissimos eos repellendus corrupti modi error quibusdam quis aliquam maiores nihil, quaerat voluptatum quasi nisi eius, consequatur dolor?</p>
                <p className='mt-5 text-md font-[helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quos minus, totam dignissimos eos repellendus corrupti modi error quibusdam quis aliquam maiores nihil, quaerat voluptatum quasi nisi eius, consequatur dolor?</p>
                <button className='bg-yellow-500 px-8 py-8 text-4xl text-black cursor-pointer mt-8'>Download</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
