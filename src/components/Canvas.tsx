import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import useNewImage, { NewImageObject } from '../hooks/useNewImage';
import Caption from './Caption';

interface ImageProps {
  sortedImage?: number[];
  setImageData: (imageData: Uint8ClampedArray) => void;
  setImageDL: (imageDL: string | null) => void;
  newImageFlag: boolean;
  setNewImageFlag: (newImageFlag: boolean) => void;
  newImageCache: NewImageObject | undefined;
  init: boolean;
}

const initImage = {
  desktop: '/assets/heads.jpg',
  mobile: '/assets/inkblot.jpg',
};

const displayImage = new window.Image();
const cacheImage = new window.Image();
displayImage.crossOrigin = 'anonymous';
cacheImage.crossOrigin = 'anonymous';

let newImageObject: ImageData | null;
let captionName: string | undefined, captionLink: string | undefined;

const Canvas = ({
  sortedImage,
  setImageData,
  setImageDL,
  newImageFlag,
  setNewImageFlag,
  newImageCache,
  init,
}: ImageProps) => {
  // console.log('Canvas');
  const imageRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const cacheRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const cacheData = useRef<ImageData | null>(null);
  const queryClient = useQueryClient();

  if (newImageFlag) {
    newImageObject = cacheData.current;
    captionName = newImageCache?.imageCreditName;
    captionLink = newImageCache?.imageCreditLink;
  }

  useEffect(() => {
    const imageCanvas = imageRef.current;
    const imageContext = imageCanvas.getContext('2d');

    if (imageContext) {
      let imageData;
      if (sortedImage) {
        const sortedCanvas = imageContext.createImageData(720, 480);
        sortedCanvas.data.forEach((_, i) => {
          sortedCanvas.data[i] = sortedImage[i];
        });
        imageContext.putImageData(sortedCanvas, 0, 0);
        setImageDL(imageCanvas.toDataURL());
      } else if (newImageObject) {
        imageContext.putImageData(newImageObject, 0, 0);
        imageData = imageContext.getImageData(0, 0, 720, 480);
        setImageData(imageData.data);
        if (newImageFlag) {
          setNewImageFlag(false);
          queryClient.invalidateQueries(['random']);
        }
      } else {
        displayImage.src = initImage.desktop;
        displayImage.onload = () => {
          imageContext.drawImage(displayImage, 0, 0);
          imageData = imageContext.getImageData(0, 0, 720, 480);
          setImageData(imageData.data);
        };
      }
    }
  }, [sortedImage, newImageObject]);

  useEffect(() => {
    const cacheContext = cacheRef.current.getContext('2d');

    if (cacheContext) {
      if (newImageCache) {
        // console.log('x', newImageCache);
        cacheImage.src = newImageCache.newImage;
        cacheImage.onload = () => {
          cacheContext.drawImage(cacheImage, 0, 0);
          cacheData.current = cacheContext.getImageData(0, 0, 720, 480);
          // console.log('y', cacheData.current);
        };
      }
    }
  }, [newImageCache]);

  return (
    <>
      <canvas 
        id="cacheCanvas" 
        ref={cacheRef} 
        width={720} 
        height={480}
      ></canvas>
      <figure>
        {/* <div className="topRule"></div> */}
        {/* <div className="botRule"></div> */}
        <canvas
          id="imageCanvas"
          ref={imageRef}
          width={720}
          height={480}
        ></canvas>
        <Caption
          init={init}
          captionName={captionName}
          captionLink={captionLink}
        />
      </figure>
    </>
  );
};

export default Canvas;
