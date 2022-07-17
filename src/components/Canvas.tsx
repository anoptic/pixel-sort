import { useState, useEffect, useRef } from 'react';
import useNewImage, { NewImageObject } from '../hooks/useNewImage';

interface ImageProps {
  sortedImage?: number[];
  setImageData: (imageData: Uint8ClampedArray) => void;
  setImageDL: (imageDL: string | null) => void;
  newImageFlag: boolean;
  setNewImageFlag: (newImageFlag: boolean) => void;
}

const initImage = {
  desktop: '/assets/heads.jpg',
  mobile: '/assets/inkblot.jpg',
};
const displayImage = new window.Image();
displayImage.crossOrigin = 'anonymous';
let newImageObject: NewImageObject;

const Canvas = ({
  sortedImage,
  setImageData,
  setImageDL,
  newImageFlag,
  setNewImageFlag,
}: ImageProps) => {
  // console.log('canvas prop', sortedImage);
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  // const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  // const [newImageObject, setNewImageObject] = useState<NewImageObject | null>(null);
  const { newImageCache } = useNewImage();

  if (newImageFlag) newImageObject = newImageCache;

  useEffect(() => {
    const imgCanvas = canvasRef.current;
    const imgContext = imgCanvas.getContext('2d');
    // setContext(imgContext);

    if (imgContext) {
      if (sortedImage) {
        const sortedCanvas = imgContext.createImageData(720, 480);
        sortedCanvas.data.forEach((_, i) => {
          sortedCanvas.data[i] = sortedImage[i];
        });
        imgContext.putImageData(sortedCanvas, 0, 0);
        setImageDL(imgCanvas.toDataURL());
      } else {
        if (newImageObject) {
          // console.log(newImageObject);
          displayImage.src = newImageObject.newImage;
          setNewImageFlag(false);
        } else {
          displayImage.src = initImage.desktop;
        }
        displayImage.onload = () => {
          imgContext.drawImage(displayImage, 0, 0);
          const imageData = imgContext.getImageData(0, 0, 720, 480);
          setImageData(imageData.data);
        };
      }
    }
  }, [sortedImage, newImageFlag, newImageObject]);

  return (
    <figure>
      <div className="topRule"></div>
      <div className="botRule"></div>
      <canvas
        id="imageCanvas"
        ref={canvasRef}
        width={720}
        height={480}
      ></canvas>
      {newImageObject && (
        <figcaption>
          Photo by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={
              newImageObject.imageCreditLink +
              '?utm_source=your_app_name&utm_medium=referral'
            }
          >
            {newImageObject.imageCreditName}
          </a>{' '}
          on{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
          >
            Unsplash
          </a>
        </figcaption>
      )}
      {!newImageObject && (
        <figcaption>Colorful heads</figcaption>
      )}
    </figure>
  );
};

export default Canvas;
