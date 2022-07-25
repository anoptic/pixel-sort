import { Box, Divider, Stack } from '@mui/material';
import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';

interface HeaderProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const clickLink = () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/anoptic';
  link.target = '_blank';
  link.rel = 'noreferer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = ({ dark, setDark }: HeaderProps) => {
  // console.log(props);
  // const [dark, setDark] = useState(true);

  const handleClick = (mode: any) => {
    // console.log(e);
    if (mode === 'dark' || mode === 'light') setDark(!dark);
    if (mode === 'plain') clickLink();
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 3rem',
      }}
    >
      <p>Pixel Sorter</p>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" variant="inset" flexItem />}
        spacing={1}
      >
        <ModeSwitch />
        <LinkIcon />
      </Stack>
    </Box>
  );
};

export default Header;
