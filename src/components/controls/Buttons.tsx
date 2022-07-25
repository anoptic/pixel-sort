import { Box } from '@mui/material';
import { MouseEvent } from 'react';
import Btn from './Btn';

export interface ButtonsProps {
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Buttons = ({ handleButton }: ButtonsProps) => {
  // console.log(props);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 0',
      }}
    >
      <Btn
        label="Apply sort parameters"
        variant="contained"
        handleButton={handleButton}
      >
        Sort
      </Btn>

      <Btn
        label="Reset to unsorted image"
        variant="outlined"
        handleButton={handleButton}
      >
        Reset
      </Btn>

      <Btn
        label="Download sorted image"
        variant="outlined"
        handleButton={handleButton}
      >
        Save
      </Btn>

      <Btn
        label="Load new image"
        variant="outlined"
        handleButton={handleButton}
      >
        Refresh
      </Btn>
    </Box>
  );
};

export default Buttons;
