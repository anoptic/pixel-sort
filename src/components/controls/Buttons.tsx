import { Box, useTheme } from '@mui/material';
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
        '& .MuiButton-contained': {
          fontWeight: 700,
        },
        '& .MuiButton-outlined': {
          backgroundColor: 'secondary.main',
          color: 'text.primary',
          // fontWeight: 400,
        },
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
