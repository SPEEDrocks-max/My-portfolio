import React from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti'

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
export default BentoCard
