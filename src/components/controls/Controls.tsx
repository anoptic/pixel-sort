import { useState, MouseEvent, ChangeEvent } from 'react';
import Buttons from './Buttons';
import Sort from './Sort';
import Threshold from './Threshold';
import imageSort from '../../funcs/imageSort';
import { Message, PixelChoice } from '../Sorter';
import { Box, Divider, SelectChangeEvent, useMediaQuery } from '@mui/material';


interface ControlsProps {
  pixelChoice: PixelChoice | null;
  setSortedImage: (sortedImage: number[] | undefined) => void;
  imageDL: string | null;
  setNewImageFlag: (newImageFlag: boolean) => void;
  setInit: (init: boolean) => void;
  fetchError: boolean;
  setImageDL: (imageDl: string | null) => void;
  setMessage: (message: Message) => void;
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
  setImageDL,
  setMessage,
}: ControlsProps) => {
  const [sortDir, setSortDir] = useState<SortDir>('vert');
  const [sortMode, setSortMode] = useState<SortMode>({
    mode: 'rgb',
    value: 0,
  });
  const [threshold, setThreshold] = useState<SortThreshold>({
    inverted: false,
    value: 127,
  });
  const matches = useMediaQuery('(max-width: 767px)');

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

  const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
    const pressedButton = event.currentTarget.value;
    switch (pressedButton) {
      case 'Sort': {
        setMessage({ open: true, type: 'sort' });
        sortImage();
        break;
      }
      case 'Reset':
        setImageDL(null);
        setSortedImage(undefined);
        break;
      case 'Save':
        if (imageDL) {
          dlImage(imageDL);
          break;
        }
        setMessage({ open: true, type: 'save' });
        break;
      case 'Refresh':
        if (fetchError) {
          setMessage({ open: true, type: 'refresh' });
          break;
        }
        setSortedImage(undefined);
        setNewImageFlag(true);
        setInit(false);
        break;
    }
  };

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setSortDir(event.target.value as SortDir);
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setSortMode(sortModeObject[event.target.value as ModeValue]);
  };

  const handleThreshold = (thresh: SortThreshold) => {
    setThreshold(thresh);
  };

  return (
    <Box
      sx={[
        {margin: '0 4rem'},
        matches && {margin: '0 1rem'},
      ]}
      // sx={{
      //   margin: '0 4rem',
      // }}
    >
      <Divider />
      <Buttons handleButton={handleButton} />
      <Sort
        handleRadio={handleRadio}
        handleSelect={handleSelect}
      />
      <Threshold handleThreshold={handleThreshold} />
    </Box>
  );
};

export default Controls;
