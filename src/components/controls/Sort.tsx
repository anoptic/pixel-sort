import { ChangeEvent, ChangeEventHandler, PointerEvent, useState } from 'react';
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
})

const SortOptionContainer = styled('div', {
  border: '1px solid $fg',
  borderRadius: 4,
  padding: '0.5rem 2rem',
});

const Sort = ({ handleRadio, modeValue, handleSelect }: SortProps) => {
  // console.log(props);
  // const [modeValue, setModeValue] = useState<string | null>('r');

  return (
    <SortContainer>
      <SortOptionContainer>
        <div id="radioSort">
          <label htmlFor="sort">Sort Direction</label>
          <div>
            <input type="radio" name="sort" value="horz" id="horz" />
            <label htmlFor="horz">Horizontal</label>
          </div>
          <div>
            <input
              type="radio"
              name="sort"
              value="vert"
              id="vert"
              defaultChecked
            />
            <label htmlFor="vert">Vertical</label>
          </div>
          <div>
            <input type="radio" name="sort" value="hove" id="hove" />
            <label htmlFor="hove">Horizontal / Vertical</label>
          </div>
        </div>
      </SortOptionContainer>
      <SortOptionContainer>
        <div>
          <label htmlFor="mode">Sort Mode</label>
          <select name="mode" id="mode">
            <option value="r">Red</option>
            <option value="g">Green</option>
            <option value="b">Blue</option>
            <option value="h">Hue</option>
            <option value="s">Saturation</option>
            <option value="l">Lightness</option>
          </select>
        </div>
      </SortOptionContainer>
    </SortContainer>
  );
};

export default Sort;
