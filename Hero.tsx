import React from 'react'
import Nevbar from './Nevbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/DPO.PNG)] bg-cover'
    style={{backgroundSize: "20%", backgroundPosition: "left 100px top 140px"}}
    >
      <Nevbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[30px] sm:text-[50px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p data-aos="flip-right">I'am Rida Danish</p>
                <p className='text-[10px] sm:text-[25px] font-light' data-aos="flip-right">It's tremendously exciting to be able to use the newest tools and methods to build practical and engaging websites and applications while also pushing the boundaries of what the web is capable of. Every project offers the opportunity for creative expression, and I find it to be tremendously fulfilling.</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

