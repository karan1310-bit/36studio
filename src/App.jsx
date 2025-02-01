import React, { useEffect } from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
    <div className='relative min-h-screen w-full bg-black font-["Satoshi_Variable"] text-white'>
      {data[0].map((canvaDets, index) => (
            <Canvas key={index} details={canvaDets} />
          ))}
          <div className='w-full h-screen'>
            <nav className='fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50'>
              <div className='text-2xl font-medium'>thirtysixstudios</div>
              <div className='flex gap-10'>
                {['Home', 'About', 'Services', 'Contact'].map((link, index) => (
                  <a key={index} href='#' className='text-md font-medium hover:text-gray-300'>{link}</a>
                ))}
              </div>
            </nav>
          </div>
    </div>
    </>
  )
}

export default App