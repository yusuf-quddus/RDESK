import { useState, useEffect } from "react";
import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Components that creates a slideshow of images.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.images - List of image relative address that will be included in slideshow.
 * @return {JSX.Element} - The Slideshow component.
 */
const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
      return () => clearInterval(interval); 
    }, [images.length]);
  
    return (
      <div className="slideshow-container col-md-6 center">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} 
               className={`slide ${currentIndex === index ? "active" : ""}`} />
        ))}
      </div>
    );
  }

  export default Slideshow;