import { MouseEvent } from 'react';
import Btn from './Btn';

export interface ButtonsProps {
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Buttons = ({ handleButton }: ButtonsProps) => {
  // console.log(props);

  return (
    <div className="btns">
      <Btn name="Sort" handleButton={handleButton} />
      <Btn name="Save" handleButton={handleButton} />
      <Btn name="Reset" handleButton={handleButton} />
      <Btn name="Refresh" handleButton={handleButton} />
    </div>
  );
};

export default Buttons;
