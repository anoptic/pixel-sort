import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { ModeValue, SortDir } from './Controls';

interface SortProps {
  handleRadio: (value: SortDir) => void;
  modeValue: ModeValue;
  handleSelect: (value: ModeValue) => void;
}

const Sort = ({ handleRadio, modeValue, handleSelect }: SortProps) => {
  // console.log(props);
  // const [modeValue, setModeValue] = useState<string | null>('r');

  return (
    <>
      <div>
        <FormControl>
          <FormLabel id="sortDirLabel">Sort Direction</FormLabel>
          <RadioGroup
            aria-labelledby="sortDirLabel"
            defaultValue="vert"
            name="sortDirGroup"
            // onChange={handleRadio}
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
      </div>
      <div>
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
      </div>
    </>
  );
};

export default Sort;
