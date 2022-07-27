import { Box, Divider, Stack, Typography } from '@mui/material';
import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';

// export interface HeaderProps {
//   dark: boolean;
//   setDark: (dark: boolean) => void;
// }

// const clickLink = () => {
//   const link = document.createElement('a');
//   link.href = 'https://github.com/anoptic';
//   link.target = '_blank';
//   link.rel = 'noreferer';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// const Header = ({ dark, setDark }: HeaderProps) => {
const Header = () => {
  // console.log(props);
  // const [dark, setDark] = useState(true);

  // const handleClick = () => {
  // console.log(e);
  // setDark(dark => !dark)
  // if (mode === 'dark' || mode === 'light') setDark(!dark);
  // if (mode === 'plain') clickLink();
  // };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 4rem',
      }}
    >
      <Typography
        component="h1"
        // variant="h1"
        sx={{
          fontSize: '20px',
          fontWeight: 300,
        }}
      >
        Pixel Sorter
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" variant="inset" flexItem />}
        spacing={1}
      >
        {/* <ModeSwitch dark={dark} setDark={setDark} /> */}
        <ModeSwitch />
        <LinkIcon />
      </Stack>
    </Box>
  );
};

export default Header;
