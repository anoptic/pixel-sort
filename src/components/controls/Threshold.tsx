import { useEffect, useState } from 'react';
import { SortThreshold } from './Controls';
import { Checkbox, CheckboxIndicator, Label } from './Checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { css } from '@stitches/react';
import { CheckedState } from '@radix-ui/react-checkbox';
import { styled } from '../../../stitches.config';

interface ThresholdProps {
  handleThreshold: (thresh: SortThreshold) => void;
}

const ThresholdContainer = styled('div', {
  border: '1px solid $fg',
  borderRadius: 4,
  marginTop: '1rem',
  padding: '0.5rem 2rem',
  width: '100%',
})

const checkboxStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginTop: 8,
});


const Threshold = ({ handleThreshold }: ThresholdProps) => {
  // console.log(props);
  const [slide, setSlide] = useState(127);
  const [checkbox, setCheckbox] = useState<CheckedState>(false);
  const [info, setInfo] = useState(
    'Only values greater than the threshold will be sorted'
  );

  // useEffect(() => {
  //   checkbox
  //     ? setInfo('Values less than the threshold will be sorted')
  //     : setInfo('Values greater than the threshold will be sorted');
  //   handleThreshold({ inverted: checkbox, value: slide });
  // }, [slide, checkbox]);

  return (
    <ThresholdContainer>
      <div>
        <label htmlFor="threshold">Threshold</label>
        <input
          type="range"
          name="threshold"
          min={0}
          max={255}
          value={slide}
          // onChange={setSlide}
        />
      </div>
      <div className={checkboxStyle()}>
        {/* <input
          type="checkbox"
          name="invert"
          onChange={(e) => setCheckbox(e.currentTarget.checked)}
        />
        <label htmlFor="invert">Invert</label> */}
        <Checkbox checked={checkbox} onCheckedChange={(e) => setCheckbox(e)}>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        <Label htmlFor="invert">Invert</Label>
      </div>
    </ThresholdContainer>
  );
};

export default Threshold;
