import { MouseEvent } from 'react';
import Btn from './Btn';

export interface ButtonsProps {
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Buttons = ({ handleButton }: ButtonsProps) => {
  // console.log(props);

  return (
    <div className="btns">
      <Btn
        name="Sort"
        label="Apply sort parameters"
        handleButton={handleButton}
      />

      <Btn name="Save" label="Download sorted image" handleButton={handleButton} />

      <Btn
        name="Reset"
        label="Reset to unsorted image"
        handleButton={handleButton}
      />

      <Btn name="Refresh" label="Load new image" handleButton={handleButton} />
    </div>
  );
};

export default Buttons;
