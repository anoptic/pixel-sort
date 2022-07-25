import { GitHub } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const LinkIcon = () => {
  return (
    <Tooltip title="View source" placement="bottom">
      <IconButton aria-label="github">
        <GitHub />
      </IconButton>
    </Tooltip>
  );
};

export default LinkIcon;
