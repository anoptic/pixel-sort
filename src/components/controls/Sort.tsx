import { Radio, RadioGroup, Select } from "@mantine/core";
import { ChangeEvent, ChangeEventHandler, PointerEvent, useState } from "react";
import { ModeValue, SortDir } from "./Controls";

interface SortProps {
  handleRadio: (value: SortDir) => void,
  modeValue: ModeValue,
  handleSelect: (value: ModeValue) => void,
}

const Sort = ({handleRadio, modeValue, handleSelect}: SortProps) => { 
  // console.log(props);
  // const [modeValue, setModeValue] = useState<string | null>('r');

  return ( 
    <div className="sort-controls">
      <div className="sortDirRadio sort">
        <RadioGroup label="Sort Direction" orientation="vertical" spacing={8} defaultValue="vert" onChange={handleRadio}>
          <Radio value="horz" label="Horizontal" />
          <Radio value="vert" label="Vertical" />
          <Radio value="hove" label="Horizontal / Vertical" />
        </RadioGroup>
      </div>
      <div className="sortModeSelect sort">
        <Select label="Sort Mode"
          data={[
            {label: "Red", value: "r", group: "RGB"},
            {label: "Green", value: "g", group: "RGB"},
            {label: "Blue", value: "b", group: "RGB"},
            {label: "Hue", value: "h", group: "HSL"},
            {label: "Saturation", value: "s", group: "HSL"},
            {label: "Lightness", value: "l", group: "HSL"}
          ]}
          value={modeValue}
          onChange={handleSelect}
        />
      </div>
      
        {/* <div id="radioSort">
          <input type="radio" name="sort" value="horz" id="horz" onChange={handleRadio} />
          <label htmlFor="horz">Horizontal</label>
        </div>
        <div>
          <input type="radio" name="sort" value="vert" id="vert" onChange={handleRadio} defaultChecked />
          <label htmlFor="vert">Vertical</label>
        </div>
        <div>
          <input type="radio" name="sort" value="hove" id="hove" onChange={handleRadio} />
          <label htmlFor="hove">Horizontal / Vertical</label>
        </div> */}
      
    </div>
  );
}

export default Sort;