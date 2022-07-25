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
} from '@mui/material';
import { useState } from 'react';
import { ModeValue, SortDir } from './Controls';

interface SortProps {
  handleRadio: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  modeValue: ModeValue;
  handleSelect: (
    event: SelectChangeEvent<ModeValue>,
    child: React.ReactNode
  ) => void;
}

const boxProps = {
  border: 1,
  borderRadius: 1,
  padding: '0.5rem 2rem',
  width: 260,
};

const Sort = ({ handleRadio, modeValue, handleSelect }: SortProps) => {
  // console.log(props);
  // const [modeValue, setModeValue] = useState<string | null>('r');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          ...boxProps,
        }}
      >
        <FormControl>
          <FormLabel id="sortDirLabel">Sort Direction</FormLabel>
          <RadioGroup
            aria-labelledby="sortDirLabel"
            defaultValue="vert"
            name="sortDirGroup"
            onChange={handleRadio}
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
          '& .MuiInputBase-input': {
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
            value={modeValue}
            onChange={handleSelect}
            sx={{
              padding: '0 0',
              width: 180,
            }}
          >
            <ListSubheader>RGB</ListSubheader>
            <MenuItem value="r">Red</MenuItem>
            <MenuItem value="g">Green</MenuItem>
            <MenuItem value="b">Blue</MenuItem>
            <ListSubheader>HSL</ListSubheader>
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
