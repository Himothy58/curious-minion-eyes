
import { useEffect, useRef } from "react";
import Eye from "./Eye";

const EyeContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const eyes = document.querySelectorAll<HTMLElement>('.eye');
      
      eyes.forEach(eye => {
        // Get the eye's position
        const eyeRect = eye.getBoundingClientRect();
        
        // Calculate the eye center
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        // Calculate the angle between the mouse and the eye
        const radian = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const rotation = (radian * (180 / Math.PI) * -1) + 270;
        
        // Calculate the distance for pupil movement (limited by eye size)
        const maxDistance = eyeRect.width * 0.2;  // Limit pupil movement
        const distance = Math.min(
          Math.hypot(event.clientX - eyeCenterX, event.clientY - eyeCenterY) * 0.1, 
          maxDistance
        );
        
        // Calculate new pupil position
        const pupilX = Math.cos(radian) * distance;
        const pupilY = Math.sin(radian) * distance;
        
        // Apply the transformation to the pupil
        const pupil = eye.querySelector<HTMLElement>('.pupil');
        if (pupil) {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };
    
    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="eye-container flex items-center justify-center gap-8">
      <Eye />
      <Eye />
    </div>
  );
};

export default EyeContainer;
