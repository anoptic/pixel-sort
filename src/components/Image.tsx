import { useEffect, useRef, useState } from "react";

interface Callback {
  setImageData: (...args: any[]) => void
}

interface initImage {
  desktop: string,
  mobile: string
}

const initImage: initImage = {
  desktop: "/assets/heads.jpg", 
  mobile: "/assets/inkblot.jpg"
}

const Image = ({setImageData}: Callback) => { 
  const [rawImage, setRawImage] = useState(initImage.desktop);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext('2d');

    const displayImage = new window.Image();
    displayImage.src = rawImage;
    displayImage.onload = () => {
      canvas.width = displayImage.naturalWidth;
      canvas.height = displayImage.naturalHeight;
      context.drawImage(displayImage, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      setImageData(imageData);
      // console.log(imageData);
    }
  }, []);
  
  return ( 
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

export default Image;