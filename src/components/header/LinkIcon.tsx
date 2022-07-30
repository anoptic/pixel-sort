import { GitHub } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

interface LinkIconProps {
  clickLink: () => void;
}

const LinkIcon = ({ clickLink }: LinkIconProps) => {
  return (
    <Tooltip title="View source" placement="bottom">
      <IconButton aria-label="github" onClick={clickLink}>
        <GitHub />
      </IconButton>
    </Tooltip>
  );
};

export default LinkIcon;
