import { useEffect, useState } from 'react';
import Controls from './controls/Controls';
import Canvas from './Canvas';
import imagePrep from '../funcs/imagePrep';
import useNewImage, { NewImageObject } from '../hooks/useNewImage';
import { Loader } from '@mantine/core';
// import useSWR from 'swr';

export interface PixelChoice {
  rgb: number[][];
  hsl: number[][];
}
// export interface NewImageData {
//   newImg: string
//   isLoading: boolean
//   isError: string
// }

// const auth = import.meta.env.VITE_ACCESS_KEY;
// const loc = '3';

const Sorter = () => {
  console.log('Sorter');
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [sortedImage, setSortedImage] = useState<number[] | undefined>(
    undefined
  );
  const [pixelChoice, setPixelChoice] = useState<PixelChoice | null>(null);
  const [imageDL, setImageDL] = useState<string | null>(null);
  const [newImageFlag, setNewImageFlag] = useState(false);
  // const { newImageCache, isLoading, isError } = useNewImage();
  // const [newImageObject, setNewImageObject] = useState<NewImageObject | null>(null);

  // newImageFlag = starts false, changed to true only with Refresh btn
  // newImageCache<NewImageObject> = result from fetch hook, runs on init
  // newImageObject<NewImageObject> = empty until Flag is changed
  // onLoad: Flag false, Cache populated, Object empty
  // onClick Refresh: Flag true, Cache copied to Object, Object passed to Canvas, Cache revalidated

  useEffect(() => {
    if (imageData) {
      // console.log('data', imageData);
      const { imagePixelsRGB, imagePixelsHSL } = imagePrep(imageData);
      setPixelChoice({ rgb: imagePixelsRGB, hsl: imagePixelsHSL });
    }
  }, [imageData]);

  // useEffect(() => {
  //   if (newImageFlag) {
  //     console.log('cache', newImageFlag, newImageCache);
  //     // setNewImageObject(newImageCache);
  //   }
  // }, [newImageFlag]);

  // if (isLoading) return <Loader />;
  // console.log(newImageCache);

  return (
    <main>
      <Canvas
        sortedImage={sortedImage}
        setImageData={setImageData}
        setImageDL={setImageDL}
        newImageFlag={newImageFlag}
        setNewImageFlag={setNewImageFlag}
        setSortedImage={setSortedImage}
      />

      <Controls
        pixelChoice={pixelChoice}
        setSortedImage={setSortedImage}
        imageDL={imageDL}
        setNewImageFlag={setNewImageFlag}
      />
    </main>
  );
};

export default Sorter;
