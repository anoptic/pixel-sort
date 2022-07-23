import { Half2Icon } from '@radix-ui/react-icons';
import { Mode } from './IconContainer';
import IconContainer from './IconContainer';

interface ModeSwitchProps {
  dark: boolean;
  handleClick: (mode: Mode) => void;
}

const ModeSwitch = ({ dark, handleClick }: ModeSwitchProps) => {
  // console.log(dark);

  return (
    <IconContainer mode={dark ? 'dark' : 'light'} handleClick={handleClick}>
      <Half2Icon />
    </IconContainer>
  );
};

export default ModeSwitch;
