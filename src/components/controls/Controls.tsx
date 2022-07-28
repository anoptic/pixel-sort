import { useState, MouseEvent, ChangeEvent } from 'react';
import Buttons from './Buttons';
import Sort from './Sort';
import Threshold from './Threshold';
import imageSort from '../../funcs/imageSort';
import { PixelChoice } from '../Sorter';
import { Box, Divider, SelectChangeEvent } from '@mui/material';

interface ControlsProps {
  pixelChoice: PixelChoice | null;
  setSortedImage: (sortedImage: number[] | undefined) => void;
  imageDL: string | null;
  setNewImageFlag: (newImageFlag: boolean) => void;
  setInit: (init: boolean) => void;
  fetchError: boolean;
  setSpinner: (spinner: boolean) => void;
  setErrorMessage: (errorMessage: boolean) => void;
  setSaveError: (saveError: boolean) => void;
  setImageDL: (imageDl: string | null) => void;
}
export type SortDir = 'horz' | 'vert' | 'hove';
export type ModeValue = 'r' | 'g' | 'b' | 'h' | 's' | 'l';
export interface SortMode {
  mode: 'rgb' | 'hsl';
  value: 0 | 1 | 2;
}
export interface SortThreshold {
  inverted: boolean;
  value: number;
}

const dlImage = (imageDL: string) => {
  const dl = document.createElement('a');
  dl.href = imageDL;
  dl.download = 'pixelsort.png';
  document.body.appendChild(dl);
  dl.click();
  document.body.removeChild(dl);
};

const sortModeObject: Record<ModeValue, SortMode> = {
  r: { mode: 'rgb', value: 0 },
  g: { mode: 'rgb', value: 1 },
  b: { mode: 'rgb', value: 2 },
  h: { mode: 'hsl', value: 0 },
  s: { mode: 'hsl', value: 1 },
  l: { mode: 'hsl', value: 2 },
};

const Controls = ({
  pixelChoice,
  setSortedImage,
  imageDL,
  setNewImageFlag,
  setInit,
  fetchError,
  setSpinner,
  setErrorMessage,
  setSaveError,
  setImageDL,
}: ControlsProps) => {
  // console.log('pixelData', pixelData);
  const [sortDir, setSortDir] = useState<SortDir>('vert');
  // const [modeValue, setModeValue] = useState<ModeValue>('r');
  const [sortMode, setSortMode] = useState<SortMode>({
    mode: 'rgb',
    value: 0,
  });
  const [threshold, setThreshold] = useState<SortThreshold>({
    inverted: false,
    value: 127,
  });

  const sortImage = () => {
    if (pixelChoice) {
      const imageSorted = imageSort({
        pixelChoice,
        sortDir,
        sortMode,
        threshold,
      });
      setSortedImage(imageSorted);
    }
  };

  // const dlImage = () => {
  //   if (imageDL) {
  //     const dl = document.createElement('a');
  //     dl.href = imageDL;
  //     dl.download = 'pixelsort.png';
  //     document.body.appendChild(dl);
  //     dl.click();
  //     document.body.removeChild(dl);
  //   }
  // };

  const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.value);
    const pressedButton = event.currentTarget.value;
    switch (pressedButton) {
      case 'Sort': {
        setSpinner(true);
        sortImage();
        break;
      }
      case 'Save':
        if (imageDL) {
          dlImage(imageDL);
          break;
        }
        setSaveError(true);
        break;
      case 'Reset':
        setImageDL(null);
        setSortedImage(undefined);
        break;
      case 'Refresh':
        if (fetchError) {
          setErrorMessage(true);
          // console.log('There was an error retrieving a new image');
          break;
        }
        setSortedImage(undefined);
        setNewImageFlag(true);
        setInit(false);
        break;
    }
  };

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setSortDir(event.target.value as SortDir);
  };

  const handleSelect = (event: SelectChangeEvent) => {
    // console.log(event.target.value);
    setSortMode(sortModeObject[event.target.value as ModeValue]);
  };

  const handleThreshold = (thresh: SortThreshold) => {
    // console.log(thresh);
    setThreshold(thresh);
  };

  return (
    <Box
      sx={{
        margin: '0 4rem',
      }}
    >
      <Divider />
      <Buttons handleButton={handleButton} />
      <Sort
        handleRadio={handleRadio}
        // modeValue={modeValue}
        handleSelect={handleSelect}
      />
      <Threshold handleThreshold={handleThreshold} />
    </Box>
  );
};

export default Controls;
