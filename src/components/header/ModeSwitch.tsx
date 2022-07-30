import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../App';

const ModeSwitch = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Tooltip
      title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'}
      placement="bottom"
    >
      <IconButton
        aria-label="dark mode switch"
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </Tooltip>
  );
};

export default ModeSwitch;
