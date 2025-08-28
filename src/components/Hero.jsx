import React , {useRef} from 'react'
import { useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
const [currentIndex , setCurrentIndex] = useState(1);
const [hasClicked, setHasClicked] = useState(false);
const [isLoading, setisLoading] = useState(true);
const [loadedVideos, setloadedVideos] = useState(0);
const totalVideos = 3;
const nextVideoRef = useRef(null);
    const HandleMiniVdClick = () => {
   setHasClicked(true);
   setCurrentIndex(upcomingVideoIndex)
}

useGSAP(() => {
  if(hasClicked){
    gsap.set('#next-video' , {visibility: 'visible'})
    gsap.to('#next-video' , {
      transformOrigin : 'center center' ,
      duration : 1 ,
      scale : 1,
      height : '100%' ,
      width : '100%' ,
      ease : 'power1.inOut' , 
      onStart : nextVideoRef.current.play(),
    })

    gsap.from('#current-video' , {
      transformOrigin : 'center center' , 
      duration : 1.5 ,
      scale : 0 ,
      ease : 'power1.inOut'
    })
  }

} , {dependencies : [currentIndex] , revertOnUpdate : true})

useGSAP(() => {
  gsap.set('#video-frame' , {
   clipPath: 'polygon(15% 0%, 72% 0%, 90%  90%, 0% 100%)' , 
    borderRadius : '0 0 40% 10%'
  })
  gsap.from('#video-frame' , {
    clipPath: 'polygon(0% 0%, 100% 0%, 100%  100%, 0% 100%)' , 
    borderRadius : '0 0 0 0' , 
    ease : 'power1.inOut',
    scrollTrigger: {
      trigger: '#video-frame' , 
      start : 'center center' ,
      end : 'bottom center' ,
      scrub : true,
    }
  })
})
const upcomingVideoIndex = (currentIndex%totalVideos) + 1;
const handleVidLoad = () => {
  setloadedVideos((prev) => prev + 1)
}

const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
<div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
<div className="mask-clip-path absolute-center overflow-hidden rounded-lg absolute z-50 size-64 cursor-pointer">
    <div onClick={HandleMiniVdClick} className="origin-center transition-all opacity-0 hover:scale-100 duration-500 ease-in scale-50 hover:opacity-100">
      <video 
       ref={nextVideoRef}
       src={getVideoSrc(upcomingVideoIndex)}
       loop 
       muted 
       id="current-video"
       className="size-64 origin-center scale-150 object-cover object-center"
       onLoadedData={handleVidLoad }
      />
    </div>
</div>
<video 
  ref={nextVideoRef}
  src={getVideoSrc(currentIndex)}
  loop
  muted 
  id="next-video"
  className="absolute-center invisible absolute z-20 object-center size-64 object-cover"
  onLoadedData={handleVidLoad}
/>

<video 
 src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
 autoPlay
 loop
 muted
 className="left-0 top-0 absolute-center size-full object-cover object-center"
 onLoadedData={handleVidLoad}

/>

<h2 className="special-font hero-heading absolute bottom-5 text-blue-75 right-5 z-40 tracking-wide">A Developer</h2>
<div className="absolute size-full left-0 top-0 z-40">
  <div className="px-5 mt-20 sm:px-10">
    <h2 className="special-font hero-heading text-blue-100 tracking-wide">I'm Sho<b>u</b>ry<b>a</b></h2>
    <p className="mb-5 font-robert-regular max-w-82 text-blue-100 text-4xl mt-10">A Creative Developer and 3D Designer<br/>Building unique web experiences</p>

  </div>

</div>
</div>
<h1 className="special-font hero-heading absolute bottom-5 text-black right-5 ">A developer </h1>
    </div>
  )
}

export default Hero
