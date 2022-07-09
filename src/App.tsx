import { useEffect, useState } from "react";
import Controls from "./components/controls/Controls";
import Header from "./components/Header";
import Image from "./components/Image";

interface initImage {
  desktop: string,
  mobile: string
}

const initImage: initImage = {
  desktop: "/assets/heads.jpg", 
  mobile: "/assets/inkblot.jpg"
}

const App = () => {
  const [rawImage, setRawImage] = useState<string>(initImage.desktop);
  const [imageData, setImageData] = useState<ImageData | null>(null);

  // if (imageData) console.log(imageData);

  return (
    <>
      <Header />
      <Image rawImage={rawImage} setImageData={setImageData} />
      <Controls />
    </>
  )
}

export default App;
