import Link from 'next/link'
import React from 'react'
import { TypewriterEffectSmooth } from './components/ui/typewriter-effect'

const Main = () => {
  const words = [
    {
    text: 'Welcome to play zone', className: 'text-black' , 
    }
  ];
  return (
    <div id='mainSection'>
      <div id="navbarSection">
        <Link href={'/home'} target='blank' className='anchorTagsInsideNavbar'>Home</Link>
        <Link href={'/Aboutus'} target='blank' className='anchorTagsInsideNavbar'>About us</Link>
      </div>
      <div id='textSection'>
      <TypewriterEffectSmooth words={words} 
        className="responsiveness-for-the-text-animation" 
        cursorClassName="bg-blue-400"/>
        <span id='textInsideTextSection'>
        PlayZone simplifies the process of finding and booking sports turfs near you. Whether you’re looking for a quick match or planning a regular session, our app offers a seamless experience, letting you reserve your spot with just a few taps. Skip the hassle of phone calls and availability checks—PlayZone brings everything you need to your fingertips. Download our app now to start booking turfs effortlessly and enjoy a streamlined process that saves you time and energy!
        </span>
      </div>
      <div id='imageSection'>
      </div>
    </div>
  )
}

export default Main
