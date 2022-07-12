import { PointerEvent } from "react";

interface ButtonsProps {
  handleButton: (event: PointerEvent<HTMLButtonElement>) => void
}

const Buttons = ({handleButton}: ButtonsProps) => { 
  // console.log(props);
  
  // const handleSort = () => {
  //   console.log('<Sort>', 'btn pressed');
  // }
  // const handleSave = () => {
  //   console.log('<Save>', 'btn pressed');
  // }
  // const handleReset = () => {
  //   console.log('<Reset>', 'btn pressed');
  // }
  // const handleRefresh = () => {
  //   console.log('<Refresh>', 'btn pressed');
  // }

  return ( 
    <div className="btns">
      <button name="sort" className="ctrl-btn" type="button" onClick={handleButton}>Sort</button>
      <button name="save" className="ctrl-btn" type="button" onClick={handleButton}>Save</button>
      <button name="reset" className="ctrl-btn" type="button" onClick={handleButton}>Reset</button>
      <button name="refresh" className="ctrl-btn" type="button" onClick={handleButton}>Refresh</button>
    </div>
  );
}

export default Buttons;