import { useEffect, useState } from "react";
import Controls from "./controls/Controls";
import Canvas from "./Canvas";
import imagePrep from "../funcs/imagePrep";

const Sorter = () => { 
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [sortedImage, setSortedImage] = useState<number[] | undefined>(undefined);
  const [pixelData, setPixelData] = useState<number[][]>({} as number[][]);
  // console.log(props);

  useEffect(() => {
    if (imageData) { 
      // console.log('data', imageData);
      const {imagePixelsRGB, imagePixelsHSL} = imagePrep(imageData);
      setPixelData(imagePixelsRGB);
    }

  }, [imageData]);
  
  return ( 
    <>
      <Canvas 
        sortedImage={sortedImage} 
        setImageData={setImageData} 
      />
      <Controls 
        pixelData={pixelData}
        setSortedImage={setSortedImage}
      />
    </>
  );
}

export default Sorter;