
import React, { useRef, useState } from 'react'

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

export default BentoTilt
