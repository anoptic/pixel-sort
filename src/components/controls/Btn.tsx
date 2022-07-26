import { Button, Tooltip, useTheme } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';
// import { ButtonsProps } from "./Buttons";

interface BtnProps {
  children: ReactNode;
  label: string;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Btn = ({ children, label, variant, handleButton }: BtnProps) => {
  // console.log(children);
  // const theme = useTheme();

  return (
    <>
      <Tooltip title={label} placement="top">
        <Button
          value={children?.toString()}
          onClick={handleButton}
          variant={variant}
          sx={{ 
            width: 80, 
            boxShadow: 'none', 
            textTransform: 'capitalize',
          }}
        >
          {children}
        </Button>
      </Tooltip>
    </>
  );
};

export default Btn;
