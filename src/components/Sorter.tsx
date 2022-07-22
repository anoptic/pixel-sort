import { useEffect, useState } from 'react';
import Controls from './controls/Controls';
import Canvas from './Canvas';
import imagePrep from '../funcs/imagePrep';
import useNewImage, { NewImageObject } from '../hooks/useNewImage';
// import { Loader } from '@mantine/core';

export interface PixelChoice {
  rgb: number[][];
  hsl: number[][];
}

const Sorter = () => {
  // console.log('Sorter');
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [sortedImage, setSortedImage] = useState<number[] | undefined>(
    undefined
  );
  const [pixelChoice, setPixelChoice] = useState<PixelChoice | null>(null);
  const [imageDL, setImageDL] = useState<string | null>(null);
  const [newImageFlag, setNewImageFlag] = useState(false);
  const [init, setInit] = useState(true);
  const newImageCache = useNewImage();
  
  useEffect(() => {
    if (imageData) {
      // console.log('data', imageData);
      const { imagePixelsRGB, imagePixelsHSL } = imagePrep(imageData);
      setPixelChoice({ rgb: imagePixelsRGB, hsl: imagePixelsHSL });
    }
  }, [imageData]);

  return (
    <main>
      <Canvas
        sortedImage={sortedImage}
        setImageData={setImageData}
        setImageDL={setImageDL}
        newImageFlag={newImageFlag}
        setNewImageFlag={setNewImageFlag}
        newImageCache={newImageCache}
        init={init}
      />

      <Controls
        pixelChoice={pixelChoice}
        setSortedImage={setSortedImage}
        imageDL={imageDL}
        setNewImageFlag={setNewImageFlag}
        setInit={setInit}
      />
    </main>
  );
};

export default Sorter;
