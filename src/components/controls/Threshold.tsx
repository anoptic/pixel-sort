import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Slider,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { SortThreshold } from './Controls';

interface ThresholdProps {
  handleThreshold: (thresh: SortThreshold) => void;
}
type Info = 'greater' | 'less';
type Invert = 'normal' | 'inverted';

const Threshold = ({ handleThreshold }: ThresholdProps) => {
  const [slide, setSlide] = useState(63);
  const [checkbox, setCheckbox] = useState(false);
  const [info, setInfo] = useState<Info>('greater');
  const [invert, setInvert] = useState<Invert>('inverted');
  const theme = useTheme();

  const handleSlide = (event: any) => {
    setSlide(() => event.target.value);
  };
  const handleCheckbox = () => {
    setCheckbox((checkbox) => !checkbox);
    setInfo((info) => (info === 'greater' ? 'less' : 'greater'));
    setInvert((invert) => (invert === 'normal' ? 'inverted' : 'normal'));
  };

  useEffect(() => {
    handleThreshold({ inverted: checkbox, value: slide });
  }, [slide, checkbox]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        border: 1,
        borderColor: theme.palette.divider,
        borderRadius: 1,
        margin: '0 0 1rem',
        padding: '0.5rem 2rem 1rem',
      }}
    >
      <FormGroup>
        <FormLabel id="thresholdLabel">Threshold</FormLabel>
        <FormLabel
          sx={{
            color: 'text.primary',
            fontSize: '12px',
            margin: '0 0 8px',
          }}
        >
          Values {info} than the threshold will be sorted
        </FormLabel>
        <Slider
          aria-labelledby="thresholdLabel"
          name="thresholdSlider"
          min={0}
          max={255}
          track={invert}
          value={slide}
          valueLabelDisplay="auto"
          onChange={handleSlide}
          sx={{
            '& .MuiSlider-thumb:before': {
              boxShadow: 0,
            },
            '& .MuiSlider-thumb:after': {
              height: '24px',
              width: '24px',
            },
            '& .MuiSlider-rail': {
              height: '6px',
            }
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkbox}
              onChange={handleCheckbox}
              sx={{
                padding: '0 9px',
              }}
            />
          }
          label="Invert"
        />
      </FormGroup>
    </Box>
  );
};

export default Threshold;
