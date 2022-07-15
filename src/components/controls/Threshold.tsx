import { ThemeContext } from '@geist-ui/core/esm/use-theme/theme-context';
import { Checkbox, InputWrapper, Slider, Text } from '@mantine/core';
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

  useEffect(() => {
    checkbox
      ? setInfo('Values less than the threshold will be sorted')
      : setInfo('Values greater than the threshold will be sorted');
    handleThreshold({ inverted: checkbox, value: slide });
  }, [slide, checkbox]);

  return (
    <div className="threshold">
      <InputWrapper label="Threshold" description={info}>
        <Slider
          min={0}
          max={255}
          value={slide}
          onChange={setSlide}
          styles={{
            track: { backgroundColor: 'red' }, //style on .track::before
            bar: { backgroundColor: 'green' },
            thumb: { borderColor: 'green', backgroundColor: 'green' },
          }}
        />
      </InputWrapper>
      <Checkbox
        label="Invert"
        checked={checkbox}
        onChange={(e) => setCheckbox(e.currentTarget.checked)}
        style={{ marginTop: 8 }}
      />
    </div>
  );
};

export default Threshold;
