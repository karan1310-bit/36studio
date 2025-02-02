import React, { useEffect, useRef, useState } from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap/all';

const App = () => {

  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className='relative min-h-screen w-full font-["Satoshi_Variable"]'>
      {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full h-screen z-[1] relative">
          <nav className="top-0 left-0 w-full flex justify-between items-center p-8 z-50">
            <div className="text-2xl font-medium">thirtysixstudios</div>
            <div className="flex gap-10">
              {["Home", "About", "Services", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="hidden sm:block text-md font-medium hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="w-full px-[14%] mt-10 md:mt-2 md:px-[22%]">
            <div className="w-[90%] md:w-[41%]">
              <h3 className="text-4xl md:text-3xl">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[100%] md:leading-5.5 md:text-sm mt-8 font-normal">
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
              <p className="mt-6">Scroll</p>
            </div>
          </div>
            <div className="w-full absolute bottom-0 left-0">
              <h1 ref={headingref} className="overflow-hidden p-2 text-7xl sm:text-[15rem] font-normal tracking-tight leading-none">
                Thirtysixstudios
              </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen font-['Satoshi_Variable'] mt-20 md:mt-32 px-10">
      {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-2xl md:text-8xl tracking-tighter">About the brand</h1>
        <p className="text-lg md:text-2xl leading-[1.2] w-[80%] mt-4 md:mt-8 font-extralight">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>

        <img
          className="w-[90%] md:w-[70%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
      </div>
    </>
  );
}

export default App