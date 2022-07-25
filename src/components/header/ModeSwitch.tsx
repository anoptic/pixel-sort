import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const ModeSwitch = () => {
  return (
    <Tooltip title="Dark mode" placement='bottom'>
      <IconButton aria-label="dark mode">
        <DarkModeOutlined />
      </IconButton>
    </Tooltip>
  );
};

export default ModeSwitch;
