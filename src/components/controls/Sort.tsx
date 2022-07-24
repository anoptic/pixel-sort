import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { styled } from '../../../stitches.config';
import { ModeValue, SortDir } from './Controls';

interface SortProps {
  handleRadio: (value: SortDir) => void;
  modeValue: ModeValue;
  handleSelect: (value: ModeValue) => void;
}

const SortContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const SortOptionContainer = styled('div', {
  border: '1px solid $secondary',
  borderRadius: 4,
  padding: '0.5rem 2rem 1rem',
});

// const Flex = styled('div', {
//   alignItems: 'center',
//   display: 'flex',
//   // margin: '10px 0',
// });

const Sort = ({ handleRadio, modeValue, handleSelect }: SortProps) => {
  // console.log(props);
  // const [modeValue, setModeValue] = useState<string | null>('r');

  return (
    <SortContainer>
      <SortOptionContainer>
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
      </SortOptionContainer>
      <SortOptionContainer>
        <div>
          <label htmlFor="mode">Sort Mode</label>
          <select name="mode" id="mode">
            <optgroup label="RGB">
              <option value="r">Red</option>
              <option value="g">Green</option>
              <option value="b">Blue</option>
            </optgroup>
            <optgroup label="HSL">
              <option value="h">Hue</option>
              <option value="s">Saturation</option>
              <option value="l">Lightness</option>
            </optgroup>
          </select>
        </div>
      </SortOptionContainer>
    </SortContainer>
  );
};

export default Sort;
