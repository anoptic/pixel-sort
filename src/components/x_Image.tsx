import { useEffect, useRef, useState } from "react";

interface ImageProps {
  rawImage: string,
  setImageData: (imageData: Uint8ClampedArray) => void
}

const displayImage = new window.Image();

// const pixelize = (data: Uint8ClampedArray) => {
//   let pixel: number[] = [];
//   let imgPix: typeof pixel[] = [];
//   data.forEach(el => {
//     pixel.push(el);
//     if (pixel.length === 4) {
//       imgPix.push([...pixel]);
//       pixel = [];
//     }
//   });
//   return imgPix;
// }

// const convertHSL = (pixels: number[][]) => {
//   return pixels.map((e,i) => rgb2hsl(e,i));
// }

// const rgb2hsl = (pixel: number[], index: number) => {
//   let r = pixel[0]/255, g = pixel[1]/255, b = pixel[2]/255;
//   let cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = (cmax-cmin);
//   let l = (cmax + cmin) / 2;
//   let s = !delta ? 0 : delta / (1 - Math.abs(2 * l - 1));
//   let h = !delta ? 0 : cmax==r ? (g-b)/delta : cmax==g ? 2+(b-r)/delta : 4+(r-g)/delta;
  
//   h = Math.floor(60 * (h<0 ? h+6 : h));
//   s = Math.floor(s * 100);
//   l = Math.floor(l * 100);

//   return [h, s, l, index];
// }

const Image = ({rawImage, setImageData}: ImageProps) => { 
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  // const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  // const {imagePixelsRGB, imagePixelsHSL} = useImagePrep(imageData)

  useEffect(() => {
    if (canvasRef.current) {
      const imgCanvas = canvasRef.current;
      const context = imgCanvas.getContext('2d');
      // setContext(imgCanvas.getContext('2d'));

      if (context) {
        displayImage.src = rawImage;
        displayImage.onload = () => {
          imgCanvas.width = displayImage.naturalWidth;
          imgCanvas.height = displayImage.naturalHeight;
          context.drawImage(displayImage, 0, 0);
          const imageData = context.getImageData(0, 0, imgCanvas.width, imgCanvas.height);
          setImageData(imageData.data);
          // const imagePixelsRGB = pixelize(imageData.data);
          // const imagePixelsHSL = convertHSL(imagePixelsRGB);
          // console.log('data', imagePixelsHSL);
        }
      }
    }
  }, [rawImage]);
  
  return ( 
    <figure>
      <canvas id="imageCanvas" ref={canvasRef}></canvas>
      <figcaption>A picture</figcaption>
    </figure>
  );
}

export default Image;