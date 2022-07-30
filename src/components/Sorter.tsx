import { useEffect, useState } from 'react';
import Controls from './controls/Controls';
import Canvas from './Canvas';
import imagePrep from '../funcs/imagePrep';
import useNewImage from '../hooks/useNewImage';
import Messages from './Messages';

export interface PixelChoice {
  rgb: number[][];
  hsl: number[][];
}
export interface Message {
  open: boolean,
  type: 'sort' | 'save' | 'refresh' | null,
}

const Sorter = () => {
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [sortedImage, setSortedImage] = useState<number[] | undefined>(
    undefined
  );
  const [pixelChoice, setPixelChoice] = useState<PixelChoice | null>(null);
  const [imageDL, setImageDL] = useState<string | null>(null);
  const [newImageFlag, setNewImageFlag] = useState(false);
  const [init, setInit] = useState(true);
  const [message, setMessage] = useState<Message>({ open: false, type: null});
  const fetchResponse = useNewImage();

  useEffect(() => {
    if (imageData) {
      const { imagePixelsRGB, imagePixelsHSL } = imagePrep(imageData);
      setPixelChoice({ rgb: imagePixelsRGB, hsl: imagePixelsHSL });
    }
  }, [imageData]);

  return (
    <main>
      <Messages message={message} setMessage={setMessage} />

      <Canvas
        sortedImage={sortedImage}
        setImageData={setImageData}
        setImageDL={setImageDL}
        newImageFlag={newImageFlag}
        setNewImageFlag={setNewImageFlag}
        newImageCache={fetchResponse}
        init={init}
        setMessage={setMessage}
      />

      <Controls
        pixelChoice={pixelChoice}
        setSortedImage={setSortedImage}
        imageDL={imageDL}
        setNewImageFlag={setNewImageFlag}
        setInit={setInit}
        fetchError={fetchResponse ? false : true}
        setImageDL={setImageDL}
        setMessage={setMessage}
      />
    </main>
  );
};

export default Sorter;
