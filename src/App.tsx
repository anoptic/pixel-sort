import { useEffect, useState } from "react";
import Controls from "./components/controls/Controls";
import Header from "./components/Header";
import Image from "./components/Image";

const App = () => {
  const [imageData, setImageData] = useState(null);

  return (
    <>
      <Header />
      <Image setImageData={setImageData} />
      <Controls />
    </>
  )
}

export default App;
