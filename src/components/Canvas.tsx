import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useSWRConfig } from 'swr';
import useNewImage, { NewImageObject } from '../hooks/useNewImage';

interface ImageProps {
  sortedImage?: number[];
  setImageData: (imageData: Uint8ClampedArray) => void;
  setImageDL: (imageDL: string | null) => void;
  newImageFlag: boolean;
  setNewImageFlag: (newImageFlag: boolean) => void;
  newImageCache: NewImageObject | undefined;
}

const initImage = {
  desktop: '/assets/heads.jpg',
  mobile: '/assets/inkblot.jpg',
};
// const url = 'https://api.unsplash.com/photos/random/';

const displayImage = new window.Image();
const cacheImage = new window.Image();
displayImage.crossOrigin = 'anonymous';
cacheImage.crossOrigin = 'anonymous';

let newImageObject: ImageData | null;

const Canvas = ({
  sortedImage,
  setImageData,
  setImageDL,
  newImageFlag,
  setNewImageFlag,
  newImageCache,
}: ImageProps) => {
  // console.log('Canvas');
  const imageRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const cacheRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const cacheData = useRef<ImageData | null>(null);
  const queryClient = useQueryClient();
  // const [newImageObject, setNewImageObject] = useState<ImageData | null>(null);
  // const { newImageCache } = useNewImage(url);
  // const newImageCache = useNewImage();
  // console.log(newImageCache);
  // const { mutate } = useSWRConfig();
  // if (cacheData) console.log('func body', cacheData.current);
  if (newImageFlag) {
    newImageObject = cacheData.current;
  }

  // const makeImageData = () => {}

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
        // setSortedImage(undefined);
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
      <canvas id="cacheCanvas" ref={cacheRef} width={720} height={480}></canvas>
      <figure>
        {/* <div className="topRule"></div> */}
        {/* <div className="botRule"></div> */}
        <canvas
          id="imageCanvas"
          ref={imageRef}
          width={720}
          height={480}
        ></canvas>
        {/* {newImageObject && (
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
        )} */}
        <figcaption>image caption with credit</figcaption>
      </figure>
    </>
  );
};

export default Canvas;
