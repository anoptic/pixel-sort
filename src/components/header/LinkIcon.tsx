import {github} from './icons'

interface ModeSwitchProps {
  handleClick: (mode: any) => void;
}

const LinkIcon = ({ handleClick }: ModeSwitchProps) => {
  return (
    <div>
      {github}
    </div>
  );
};

export default LinkIcon;
