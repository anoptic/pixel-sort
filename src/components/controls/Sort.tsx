import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  ListSubheader,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ModeValue } from './Controls';

interface SortProps {
  handleRadio: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  handleSelect: (
    event: SelectChangeEvent<ModeValue>,
    child: React.ReactNode
  ) => void;
}

const boxProps = {
  backgroundColor: 'background.paper',
  border: 1,
  borderRadius: 1,
  padding: '0.5rem 2rem 1rem',
  width: '100%',
};

const Sort = ({ handleRadio, handleSelect }: SortProps) => {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <Box
      sx={[
        { display: 'flex' },
        { gap: '1rem' },
        { justifyContent: 'space-between' },
        { margin: '0 0 1rem' },
        matches && { flexDirection: 'column' },
      ]}
    >
      <Box
        sx={{
          ...boxProps,
          borderColor: theme.palette.divider,
        }}
      >
        <FormControl>
          <FormLabel id="sortDirLabel">Sort Direction</FormLabel>
          <RadioGroup
            aria-labelledby="sortDirLabel"
            defaultValue="vert"
            name="sortDirGroup"
            onChange={handleRadio}
            sx={{
              '& .MuiRadio-root': {
                padding: '4px 9px',
              },
            }}
          >
            <FormControlLabel
              control={<Radio />}
              value="horz"
              label="Horizontal"
            />
            <FormControlLabel
              control={<Radio />}
              value="vert"
              label="Vertical"
            />
            <FormControlLabel
              control={<Radio />}
              value="hove"
              label="Horizontal / Vertical"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        sx={{
          ...boxProps,
          borderColor: theme.palette.divider,
          '& .MuiInputBase-input': {
            backgroundColor: 'secondary.main',
            padding: '0.5rem 1rem',
          },
          '& .MuiFormLabel-root': {
            padding: '0 0 8px',
          },
        }}
      >
        <FormControl>
          <FormLabel id="sortModeLabel">Sort Mode</FormLabel>
          <Select
            defaultValue="r"
            onChange={handleSelect}
            sx={{
              padding: '0 0',
              width: 180,
              '& .MuiListSubheader-root': {
                fontSize: '0.5rem',
                fontWeight: 700,
                lineHeight: '32px',
              },
              '& .MuiMenuItem-root.Mui-selected': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            <ListSubheader
              sx={{
                fontWeight: 700,
                lineHeight: '32px',
              }}
            >
              RGB
            </ListSubheader>
            <MenuItem value="r">Red</MenuItem>
            <MenuItem value="g">Green</MenuItem>
            <MenuItem value="b">Blue</MenuItem>
            <ListSubheader
              sx={{
                fontWeight: 700,
                lineHeight: '32px',
              }}
            >
              HSL
            </ListSubheader>
            <MenuItem value="h">Hue</MenuItem>
            <MenuItem value="s">Saturation</MenuItem>
            <MenuItem value="l">Lightness</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Sort;
