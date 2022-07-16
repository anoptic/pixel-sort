import { useEffect, useState } from 'react';
import Controls from './controls/Controls';
import Canvas from './Canvas';
import imagePrep from '../funcs/imagePrep';

export interface PixelChoice {
  rgb: number[][];
  hsl: number[][];
}

const Sorter = () => {
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [sortedImage, setSortedImage] = useState<number[] | undefined>(undefined);
  const [pixelChoice, setPixelChoice] = useState<PixelChoice | null>(null);
  const [imageDL, setImageDL] = useState<string | null>(null);
  // console.log(props);

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
      />
      <Controls
        pixelChoice={pixelChoice}
        setSortedImage={setSortedImage}
        imageDL={imageDL}
      />
    </main>
  );
};

export default Sorter;
