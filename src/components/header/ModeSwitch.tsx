import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { HeaderProps } from './Header';

const ModeSwitch = ({ dark, setDark }: HeaderProps) => {

  return (
    <Tooltip title={dark ? 'Light mode' : 'Dark mode'} placement="bottom">
      <IconButton
        aria-label="dark mode switch"
        onClick={() => setDark(!dark)}
      >
        {dark ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </Tooltip>
  );
};

export default ModeSwitch;
