import React from 'react'
import Button from './Button'
const ImageClipBox = ({src , clipClass}) => {
  return(
        <div className={clipClass}>
                    <img 
                    src={src}
                    alt=""
                    className='size-full object-cover'
                    />
                </div>
)}
const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
        <div className='rounded-lg relative text-blue-50 bg-black py-24 sm:overflow-hidden'>
            <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 '>
             < ImageClipBox src='img/contact-1.webp' clipClass='contact-clip-path-1' />
             < ImageClipBox src='img/contact-2.webp' clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60' />
            </div>
            <div className='absolute -top-40 left-20 sm:top-1/2 md:left-auto w-60 md:right-10 lg:top-20 lg:w-80 '>
                 < ImageClipBox src='img/swordman-partial.webp' clipClass='absolute md:scale-125' />
                 < ImageClipBox src='img/swordman.webp' clipClass='sword-man-clip-path md:scale-125' />
            </div>
            <div className='relative z-10 flex flex-col items-center text-center'>
              <p className='font-general text-lg uppercase '>Get in Touch</p>
              <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>Have a project in mind?<br/> Let's build it together.</p>
              <Button to='/contact' title='contact me' containerClass = "mt-10 cursor-pointer text-black bg-white font-zentry" />
            </div>
        </div>
      
    </div>
  )
}

export default Contact
