// import { GitHub } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip } from '@mui/material';

interface LinkIconProps {
  clickLink: () => void;
}

const LinkIcon = ({ clickLink }: LinkIconProps) => {
  return (
    <Tooltip title="View source" placement="bottom">
      <IconButton aria-label="github" onClick={clickLink}>
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
};

export default LinkIcon;
