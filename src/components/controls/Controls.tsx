import Buttons from "./Buttons";
import Sort from "./Sort";
import Threshold from "./Threshold";

const Controls = () => { 
  // console.log(props);
  
  return ( 
    <div className="controls">
      <Buttons />
      <Sort />
      <Threshold />
    </div>
  );
}

export default Controls;