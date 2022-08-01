import { Box, styled, useMediaQuery } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { NewImageObject } from '../hooks/useNewImage';
import Caption from './Caption';
import { Message } from './Sorter';

interface ImageProps {
  sortedImage?: number[];
  setImageData: (imageData: Uint8ClampedArray) => void;
  setImageDL: (imageDL: string | null) => void;
  newImageFlag: boolean;
  setNewImageFlag: (newImageFlag: boolean) => void;
  newImageCache: NewImageObject | undefined;
  init: boolean;
  setMessage: (message: Message) => void;
}

const Figure = styled('figure')({
  margin: 0,
});

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
  setMessage,
}: ImageProps) => {
  const imageRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const cacheRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const cacheData = useRef<ImageData | null>(null);
  const queryClient = useQueryClient();
  const matches = useMediaQuery('(max-width: 767px)');
  const w = matches ? 360 : 720;

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
        const sortedCanvas = imageContext.createImageData(w, 480);
        sortedCanvas.data.forEach((_, i) => {
          sortedCanvas.data[i] = sortedImage[i];
        });
        imageContext.putImageData(sortedCanvas, 0, 0);
        setMessage({open: false, type: null});
        setImageDL(imageCanvas.toDataURL());
      } else if (newImageObject) {
        imageContext.putImageData(newImageObject, 0, 0);
        imageData = imageContext.getImageData(0, 0, w, 480);
        setImageData(imageData.data);
        if (newImageFlag) {
          setNewImageFlag(false);
          queryClient.invalidateQueries(['random']);
        }
      } else {
        displayImage.src = matches ? initImage.mobile : initImage.desktop;
        displayImage.onload = () => {
          imageContext.drawImage(displayImage, 0, 0);
          imageData = imageContext.getImageData(0, 0, w, 480);
          setImageData(imageData.data);
        };
      }
    }
  }, [sortedImage, newImageObject, matches]);

  useEffect(() => {
    const cacheContext = cacheRef.current.getContext('2d');

    if (cacheContext) {
      if (newImageCache) {
        cacheImage.src = newImageCache.newImage;
        cacheImage.onload = () => {
          cacheContext.drawImage(cacheImage, 0, 0);
          cacheData.current = cacheContext.getImageData(0, 0, w, 480);
        };
      }
    }
  }, [newImageCache]);

  return (
    <>
      <canvas id="cacheCanvas" ref={cacheRef} width={w} height={480}></canvas>
      <Figure>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <canvas
            id="imageCanvas"
            ref={imageRef}
            width={w}
            height={480}
          ></canvas>
        </Box>
        <Caption
          init={init}
          captionName={captionName}
          captionLink={captionLink}
        />
      </Figure>
    </>
  );
};

export default Canvas;
