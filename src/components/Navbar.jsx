import React, { useEffect } from 'react'
import { useRef , useState } from 'react';
import { TiLocation, TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const Navbar = () => {

  const [isMenuOpen , setIsMenuOpen] = useState(false);

  const [isIndicatorActive, setIsIndicatorActive] = React.useState(false);
  
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);

    const navContainerRef = useRef(null);
const navItems = ['Home' , 'Projects' , 'About' , 'Contact']
const audioElementRef = useRef(null);
const toggleAudioIndicator = () => {
   setIsIndicatorActive((prev) => !prev)
      setIsAudioPlaying((prev) => !prev)
}
 
const [lastScrollY , setLastScrollY] = useState(0);
const [isNavVisible , setIsNavVisible] = useState(true);

const { y : currentScrollY} = useWindowScroll();
useEffect(() => {
 if(currentScrollY === 0 ){
setIsNavVisible(true)
navContainerRef.current.classList.remove('floating-nav');
 }
 else if(currentScrollY > lastScrollY){
  setIsNavVisible(false)
  navContainerRef.current.classList.add('floating-nav');  
 }
 else if(currentScrollY < lastScrollY){
  setIsNavVisible(true)
  navContainerRef.current.classList.add('floating-nav');
 }
 setLastScrollY(currentScrollY , lastScrollY);
} , [currentScrollY])

useEffect(() => {
   gsap.to(navContainerRef.current , {
    y : isNavVisible ? 0 : -100 ,
    opacity : isNavVisible ? 1 : 0 ,
    duration : 0.2
})
}, [isNavVisible])
useEffect(() => {
 if(isAudioPlaying){
  audioElementRef.current.play()
 }
 else(
  audioElementRef.current.pause()
 )
} , [isAudioPlaying])
  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 ">
        <header className='absolute w-full -translate-y-1/2 top-1/2'>
        <nav className='flex size-full items-center p-4'>
            <div className='flex items-center gap-7'>
                <img
                alt='logo'
                src='img/logo.png'
                className='w-10'
                 />
                
            </div>
            <div className='flex h-full items-center ml-auto gap-6'>
              <div className='hidden md:block'></div>
                {navItems.map((item)=>(
                  <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                    {item}
                  </a>
                ) )}
            </div>
            <button className='ml-10 space-x-0.5 flex items-center' onClick={toggleAudioIndicator}>
              <audio ref={audioElementRef} className='hidden' src='audio/loop.mp3' loop />
{[ 1, 2 ,3 ,4].map((bar) => (
  <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }}>

  </div>
))}
            </button>
        </nav>


        </header>
    
    </div>
  )
}

export default Navbar
