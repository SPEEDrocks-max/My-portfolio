import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import {FaReact , FaGitAlt , FaJava , FaPython} from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiThreedotjs  } from 'react-icons/si';
import Button from './Button';
import BentoCard from './BentoCard';
import BentoTilt from './BentoTilt';

// 1. Modify BentoCard to render a "Coming Soon" button
<BentoCard />

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
        
        <BentoTilt className='border-hsla mb-7 h-96 w-full overflow-hidden rounder-md md:h-auto bg-blue-700'>
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
                isComingSoon={false}

              />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 bg-orange-500'>
                < BentoCard
                src='videos/feature-2.mp4'
                title={ <>3d Solar-System</>}
                // 4. Add the new description and the project link
                            href="https://solar-system-two-phi.vercel.app/"
                />
            </BentoTilt>
            <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 bg-white h-auto'>
                <BentoCard  
                src='videos/feature-3.mp4'
                title={<>Drisht<b/>i AR</>}
                isComingSoon={true}
                />
               
            </BentoTilt>
 <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0 bg-red-500 h-auto'>
                <BentoCard 
                src='videos/feature-4.mp4'
                title={<>College<b/> In 3D</>}
             
                isComingSoon={true}
                />
            </BentoTilt>

            <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:h-auto md:me-0 bg-green-500 h-auto'>
                <BentoCard 
                className = 'text-black !'
                src='videos/video-5.mp4'
                title={<>Minecraft for Browser!!</>}
                description="."  
                isComingSoon={true}
                />
            </BentoTilt>

<BentoTilt className='bento-tilt_1 md:col-span-1 bg-violet-400 h-auto'>
                <BentoCard 
                src='/videos/video-6.mp4'
                />
            </BentoTilt>


   
        </div>
</div>
    </section>
  )
}

export default Features
