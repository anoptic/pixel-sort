import { Button, Tooltip } from '@mui/material';
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

  return (
    <>
      <Tooltip title={label} placement="top">
        <Button
          value={children?.toString()}
          onClick={handleButton}
          variant={variant}
          sx={{width: 110, boxShadow: "none"}}
        >
          {children}
        </Button>
      </Tooltip>
    </>
  );
};

export default Btn;
