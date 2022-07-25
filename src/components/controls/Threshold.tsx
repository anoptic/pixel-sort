import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Slider,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { SortThreshold } from './Controls';

interface ThresholdProps {
  handleThreshold: (thresh: SortThreshold) => void;
}

const Threshold = ({ handleThreshold }: ThresholdProps) => {
  // console.log(props);
  const [slide, setSlide] = useState(127);
  const [checkbox, setCheckbox] = useState(false);
  const [info, setInfo] = useState(
    'Only values greater than the threshold will be sorted'
  );

  const handleSlide = (event: any) => {
    setSlide(() => event.target.value);
  };
  const handleCheckbox = () => {
    setCheckbox((checkbox) => !checkbox);
  };

  useEffect(() => {
    checkbox
      ? setInfo('Values less than the threshold will be sorted')
      : setInfo('Values greater than the threshold will be sorted');
    handleThreshold({ inverted: checkbox, value: slide });
  }, [slide, checkbox]);

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 1,
        margin: '1rem 0',
        padding: '0.5rem 2rem',
      }}
    >
      <FormGroup>
        <FormLabel id="thresholdLabel">Threshold</FormLabel>
        <Slider
          aria-labelledby="thresholdLabel"
          name="thresholdSlider"
          min={0}
          max={255}
          value={slide}
          onChange={handleSlide}
        />
        <FormControlLabel
          control={<Checkbox checked={checkbox} onChange={handleCheckbox} />}
          label="Invert"
        />
      </FormGroup>
    </Box>
  );
};

export default Threshold;
