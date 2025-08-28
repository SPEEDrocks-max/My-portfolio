import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start:"center center",
                end: "+=800 center",
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        })
        clipAnimation.to('.mask-clip-path' , {
            width: '100vw',
            height: "100vh",
            borderRadius: 0,

        })
    }, [])

  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative flex flex-col items-center mt-36 mb-8 gap-5'>
            <h2 className='text-sm font-general md:text-[10px] uppercase'>A little About Me</h2>
          <AnimatedTitle  
          title= "I create engaging and interactive web experiences" 
          containerClass="mt-5 !text-black text-center"
          />
        
   <div className='about-subtext'>
    <p>I'm a passionate developer who loves blending design and technology</p>
    <p>My goal is to build things that are both beautiful and functional</p>
   </div>
        </div>
      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
            <img src='img/about.webp'
            alt='Background'
            className='absolute left-0 right-0 size-full object-cover'
            />
        </div>
      </div>
    </div>
  )
}
export default About;
