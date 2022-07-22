import { ChangeEvent, ChangeEventHandler, PointerEvent, useState } from 'react';
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
    <div className="sort-controls">
      <div className="sortDirRadio sort">
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
      </div>
      <div className="sortModeSelect sort">
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
      </div>
    </div>
  );
};

export default Sort;
