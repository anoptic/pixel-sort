import { MouseEvent } from 'react';
import { styled } from '../../../stitches.config';
import Btn from './Btn';

export interface ButtonsProps {
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonContainer = styled('div', {
  borderTop: '1px solid $secondary',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 0',
  width: '100%',
});

const Buttons = ({ handleButton }: ButtonsProps) => {
  // console.log(props);

  return (
    <ButtonContainer>
      <Btn
        name="Sort"
        label="Apply sort parameters"
        handleButton={handleButton}
      />

      <Btn
        name="Save"
        label="Download sorted image"
        handleButton={handleButton}
      />

      <Btn
        name="Reset"
        label="Reset to unsorted image"
        handleButton={handleButton}
      />

      <Btn name="Refresh" label="Load new image" handleButton={handleButton} />
    </ButtonContainer>
  );
};

export default Buttons;
