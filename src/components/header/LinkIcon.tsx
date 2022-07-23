import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Mode } from './IconContainer';
import IconContainer from './IconContainer';

interface ModeSwitchProps {
  handleClick: (mode: Mode) => void;
}

const LinkIcon = ({ handleClick }: ModeSwitchProps) => {
  return (
    <IconContainer mode="plain" handleClick={handleClick}>
      <GitHubLogoIcon />
    </IconContainer>
  );
};

export default LinkIcon;
