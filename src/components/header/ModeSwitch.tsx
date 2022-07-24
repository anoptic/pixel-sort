import {sun} from './icons'

interface ModeSwitchProps {
  dark: boolean;
  handleClick: (mode: any) => void;
}

const ModeSwitch = ({ dark, handleClick }: ModeSwitchProps) => {
  // console.log(dark);

  return (
    <div>
      {sun}
    </div>
  );
};

export default ModeSwitch;
