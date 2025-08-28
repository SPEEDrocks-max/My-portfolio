import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import {FaReact , FaGitAlt , FaJava , FaPython} from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiThreedotjs  } from 'react-icons/si';
import Button from './Button';
const BentoTilt = ({children , className = '' }) => {
    const [transformStyle , setTransformStyle] = useState('')
    const itemRef = useRef()
    const handleMouseMove = (e) => {
   if(!itemRef.current) return;

   const {height, width, left, top} = itemRef.current.getBoundingClientRect();
   const relativeX = (e.clientX - left)/width;
   const relativeY = (e.clientY - top)/height;

   const tiltX = (relativeX - 0.5)*10
    const tiltY = (relativeY - 0.5)*-10
     const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`
setTransformStyle(newTransform)
    }  
     
    const handleMouseLeave = (e) => {
    setTransformStyle('')
    } 
    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}

        </div>
    )

}
// 1. Modify BentoCard to render a "Coming Soon" button
const BentoCard = ({src, title, description, isComingSoon , href}) => {
    return (
        <div className='relative size-full'> 
            
            <video 
            src={src}
            loop
            autoPlay
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-50 size-full flex flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font '>{title}</h1>
                    {description && <div className='mt-3 max-w-sm text-xs md:text-base'>{description}</div>  
                  }
                    
                </div>
                {href && (
                    <Button
                        href={href}
                        title="View Project"
                        containerClass="bg-white text-black font-special mt-5 self-start"
                        rightIcon={<TiLocationArrow />}
                    />
                )}
                {/* This will render a disabled button if isComingSoon is true and there's no href */}
                {isComingSoon && !href && (
                    <div className="group z-10 relative w-fit cursor-not-allowed overflow-hidden px-7 rounded-full py-3 flex items-center justify-center gap-2 bg-gray-500 text-white font-special mt-5 self-start">
                        Coming Soon
                    </div>
                )}
            </div>
         

        </div>
    )
}

const Features = () => {
    const techStack = [
        {name: 'React' , icon : <FaReact className='text-blue-50'/>},
        {name: 'JavaScript' , icon : <SiJavascript className='text-yellow-300'/>},
        {name: 'TailwindCSS' , icon : <SiTailwindcss className='text-blue-400'/>},
        {name: 'Three.js' , icon : <SiThreedotjs className='text-white'/>},
        {name: 'Java' , icon : <FaJava className='text-red-600'/>},
        {name: 'Python' , icon : <FaPython className='text-yellow-400'/>},
        {name: 'Git' , icon : <FaGitAlt className='text-orange-400'/>},  
   

    ]
  return (
    <section id='projects' className='bg-black pb-52 '>
        <div className='container mx-auto px-3 md:px-10 '>
           <div className='px-5 py-32'>
            <p className='font-circular-web text-lg text-blue-50'>My Work</p>

           
           <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Here are some of the projects I'm proud of. Each one is a unique piece of development and design. There are some more projects shown that i will be deploying very soon! </p>
        </div>
        
        <BentoTilt className='border-hsla mb-7 h-96 w-full overflow-hidden rounder-md md:h-[65vh] '>
             <BentoCard 
             src = "videos/feature-1.mp4"
             title = {
                <>My Tech Stack</>
             }
                description= {
                    <div className='grid grid-cols-4 gap-y-8 mt-12 gap-x-4'>
                        {techStack.map((tech) => (
                            <div key={tech.name} className='flex flex-col justify-centeritems-center gap-2 '>
                            <div className='text-5xl'>{tech.icon}</div>
                                <span className='text-sm font-special'>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                }
             isComingSoon = {true
             }

              />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                < BentoCard
                src='videos/feature-2.mp4'
                title={ <>3d Solar-System</>}
                // 4. Add the new description and the project link
                description= "Explore our solar system in an interactive 3D simulation built with Three.js. Navigate through space, view accurate planetary orbits, and click on celestial bodies to learn more about them. More features coming soon!"
                href="https://solar-system-two-phi.vercel.app/"
                />
            </BentoTilt>
            <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                <BentoCard  
                src='videos/feature-3.mp4'
                title={<>TechFi<b/>ndie</>}
                description="TechFinder is an AI-powered app that connects hackathon enthusiasts with the right teammates by matching skills, interests, and goals—making team formation fast, smart, and effortless."
                // 2. Add the isComingSoon prop here
                isComingSoon={true}
                />
               
            </BentoTilt>
 <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0 '>
                <BentoCard 
                src='videos/feature-4.mp4'
                title={<>College<b/> In 3D</>}
                description="Wanna see your college in 3D? Explore a detailed 3D model of our college campus, complete with interactive features and immersive views. Navigate through buildings, view landmarks, and get a feel for the campus layout from anywhere in the world."  
                isComingSoon={true}
                />
            </BentoTilt>
            <BentoTilt className='bento-tilt_1 row-span-1 col-span-2'>
                <div className='flex flex-row size-full bg-violet-300 justify-between p-5'>
                    <h1 className='bento-title special-font text-black max-w-64  '>M<b>o</b>re Co<b>m</b>ing S<b>o</b>on! </h1>
                    <TiLocationArrow 
                    className='m-5 scale-[5] self-end '
                    />
                </div>
            </BentoTilt>
        </div>
</div>
    </section>
  )
}

export default Features
