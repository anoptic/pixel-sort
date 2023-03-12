import { Box, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';

const clickLink = () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/anoptic/pixel-sort';
  link.target = '_blank';
  link.rel = 'noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = () => {
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <Box
      sx={[
        { alignItems: 'center' },
        { display: 'flex' },
        { justifyContent: 'space-between' },
        { padding: '0.5rem 4rem' },
        matches && { padding: '0.5rem 1rem' },
        { width: '100%' },
      ]}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: '20px',
          fontWeight: 300,
        }}
      >
        Pixel Sort
      </Typography>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" variant="inset" flexItem />}
        spacing={1}
      >
        <ModeSwitch />
        <LinkIcon clickLink={clickLink} />
      </Stack>
    </Box>
  );
};

export default Header;
