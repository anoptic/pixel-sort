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
interface TrackInfo {
  infoMessage: 'greater' | 'less';
  trackMode: 'normal' | 'inverted';
}
type Info = 'greater' | 'less';
type Invert = 'normal' | 'inverted';

const Threshold = ({ handleThreshold }: ThresholdProps) => {
  // console.log(props);
  const [slide, setSlide] = useState(63);
  const [checkbox, setCheckbox] = useState(false);
  const [info, setInfo] = useState<Info>('greater');
  const [invert, setInvert] = useState<Invert>('inverted');
  // const trackInfo: TrackInfo = {
  //   infoMessage: 'greater',
  //   trackMode: 'normal',
  // };
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
    // trackInfo.infoMessage = 'greater';
    // trackInfo.trackMode = 'normal';
    // if (checkbox) {
    //   trackInfo.infoMessage = 'less';
    //   trackInfo.trackMode = 'inverted';
    // }
    handleThreshold({ inverted: checkbox, value: slide });
  }, [slide, checkbox]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        border: 1,
        borderColor: theme.palette.divider,
        borderRadius: 1,
        margin: '1rem 0',
        padding: '0.5rem 2rem',
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
          }}
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
