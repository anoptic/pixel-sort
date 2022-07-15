import { useState, PointerEvent, ChangeEventHandler, ChangeEvent } from "react";
import Buttons from "./Buttons";
import Sort from "./Sort";
import Threshold from "./Threshold";
import imageSort from '../../funcs/imageSort'
import { PixelChoice } from "../Sorter";

interface ControlsProps {
  pixelChoice: PixelChoice | null,
  setSortedImage: (sortedImage: number[] | undefined) => void
}
export type SortDir = 'horz' | 'vert' | 'hove';
export type ModeValue = 'r' | 'g' | 'b' | 'h' | 's' | 'l';
export interface SortMode {
  mode: 'rgb' | 'hsl',
  value: 0 | 1 | 2,
}
export interface RangeThreshold {
  inverted: boolean,
  value: number,
}

const Controls = ({pixelChoice, setSortedImage}: ControlsProps) => { 
  // console.log('pixelData', pixelData);
  const [sortDir, setSortDir] = useState<SortDir>('vert');
  const [modeValue, setModeValue] = useState<ModeValue>('r');
  const [sortMode, setSortMode] = useState<SortMode>({mode: 'rgb', value: 0});
  const [threshold, setThreshold] = useState<RangeThreshold>({inverted: false, value: 127});

  const handleButton = (event: PointerEvent<HTMLButtonElement>) => {
    const pressedButton = event.currentTarget.name;
    switch (pressedButton) {
      case 'sort': {
        let imageSorted, pixelData;
        if (pixelChoice) {
          if (sortMode.mode === 'rgb') {
            pixelData = pixelChoice.rgb;
          } else {
            pixelData = pixelChoice.hsl;
          }
          imageSorted = imageSort({pixelData, sortDir, sortMode, threshold});
          setSortedImage(imageSorted);
        }
        break;
      }
      case 'save':
        console.log('save');
        break;
      case 'reset':
        setSortedImage(undefined);
        break;
      case 'refresh':
        console.log('refresh');
        break;
    }
  }

  const handleRadio = (value: SortDir) => {
    setSortDir(value);
  }

  const handleSelect = (value: ModeValue) => {
    setModeValue(value);
    switch (value) {
      case 'r':
        setSortMode({mode: 'rgb', value: 0});
        break;
      case 'g':
        setSortMode({mode: 'rgb', value: 1});
        break;
      case 'b':
        setSortMode({mode: 'rgb', value: 2});
        break;
      case 'h':
        setSortMode({mode: 'hsl', value: 0});
        break;
      case 's':
        setSortMode({mode: 'hsl', value: 1});
        break;
      case 'l':
        setSortMode({mode: 'hsl', value: 2});
        break;
    }
  }
  
  return ( 
    <div className="controls column">
      <Buttons handleButton={handleButton} />
      <Sort handleRadio={handleRadio} modeValue={modeValue} handleSelect={handleSelect} />
      <Threshold />
    </div>
  );
}

export default Controls;