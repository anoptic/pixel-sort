import { useEffect, useRef, useState } from "react";

interface ImageProps {
  sortedImage?: number[],
  setImageData: (imageData: Uint8ClampedArray) => void,
}

const initImage = {
  desktop: "/assets/heads.jpg", 
  mobile: "/assets/inkblot.jpg"
}
const displayImage = new window.Image();

const Canvas = ({sortedImage, setImageData}: ImageProps) => { 
  // console.log('canvas prop', sortedImage);
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  // const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  
  useEffect(() => {
      const imgCanvas = canvasRef.current;
      const imgContext = imgCanvas.getContext('2d');
      // setContext(imgContext);
      
      if (imgContext) {
        console.log('context created');
        if (sortedImage) {
          const sortedCanvas = imgContext.createImageData(720, 480);
          sortedCanvas.data.forEach((_, i) => {
            sortedCanvas.data[i] = sortedImage[i];
          });
          imgContext.putImageData(sortedCanvas, 0, 0);
        } else {
          displayImage.src = initImage.desktop;
          displayImage.onload = () => {
            imgContext.drawImage(displayImage, 0, 0);
            const imageData = imgContext.getImageData(0, 0, 720, 480);
            setImageData(imageData.data);
          }
        }
      }
  }, [sortedImage]);
  
  return ( 
    <figure>
      <canvas id="imageCanvas" ref={canvasRef} width={720} height={480}></canvas>
      <figcaption>A picture of heads</figcaption>
    </figure>
  );
}

export default Canvas;