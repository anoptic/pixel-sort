import { useState, PointerEvent } from "react";
// import { SortMode } from "../Sorter";
import Buttons from "./Buttons";
import Sort from "./Sort";
import Threshold from "./Threshold";
import imageSort from '../../funcs/imageSort'

interface ControlsProps {
  pixelData: number[][],
  setSortedImage: (sortedImage: number[]) => void
}
export type SortDir = 'horz' | 'vert' | 'hove';
export interface SortMode {
  mode: string,
  value: string
}

const Controls = ({pixelData, setSortedImage}: ControlsProps) => { 
  // console.log('pixelData', pixelData);
  const [sortDir, setSortDir] = useState<SortDir>('horz');
  const [sortMode, setSortMode] = useState<SortMode>({mode: 'rgb', value: 'r'});

  const handleButton = (event: PointerEvent<HTMLButtonElement>) => {
    const pressedButton = event.currentTarget.name;
    switch (pressedButton) {
      case 'sort':
        const imageSorted = imageSort({pixelData, sortDir, sortMode});
        // console.log('sorted', imageSorted);
        setSortedImage(imageSorted);
        // console.log('sort');
        break;
      case 'save':
        console.log('save');
        break;
      case 'reset':
        console.log('reset');
        break;
      case 'refresh':
        console.log('refresh');
        break;
    }
  }
  
  return ( 
    <div className="controls">
      <Buttons handleButton={handleButton} />
      <Sort />
      <Threshold />
    </div>
  );
}

export default Controls;