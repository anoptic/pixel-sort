import { useEffect, useRef, useState } from "react";

interface ImageProps {
  rawImage: string,
  setImageData: (imageData: ImageData) => void
}

const displayImage = new window.Image();

const Image = ({rawImage, setImageData}: ImageProps) => { 
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // const displayImage = new window.Image();
    displayImage.src = rawImage;
    displayImage.onload = () => {
      canvas.width = displayImage.naturalWidth;
      canvas.height = displayImage.naturalHeight;
      context!.drawImage(displayImage, 0, 0);
      const imageData = context!.getImageData(0, 0, canvas.width, canvas.height);
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