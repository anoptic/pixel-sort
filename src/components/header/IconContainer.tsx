import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export type Mode = 'dark' | 'light' | 'plain';

interface IconContainerProps {
  children: ReactNode;
  mode: Mode;
  handleClick: (mode: Mode) => void;
}

const IconBox = styled('button', {
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderWidth: 0,
  backgroundColor: 'transparent',
  padding: '0 0',
  // margin: '8px 8px',
  // '&:hover': {
  //   color: 'red',
  //   // boxShadow: '0 0 0 2px $secondary',
  // },
});

const IconMode = styled('div', {
  alignItems: 'center',
  color: '$fg',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    color: '$primary',
  },
  $$enbiggen: 'scale(1.4, 1.4)',

  variants: {
    mode: {
      dark: {
        transform: '$$enbiggen rotate(180deg)',
      },
      light: {
        transform: '$$enbiggen rotate(180deg)',
      },
      plain: {
        transform: '$$enbiggen',
      },
    },
  },
});

const IconContainer = ({ children, mode, handleClick }: IconContainerProps) => {
  // console.log(props);

  return (
    <IconBox className="icon-box" onClick={() => handleClick(mode)}>
      <IconMode mode={mode}>{children}</IconMode>
    </IconBox>
  );
};

export default IconContainer;
