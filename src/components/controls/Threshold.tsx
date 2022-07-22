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
      <div>
        <input
          type="checkbox"
          name="invert"
          onChange={(e) => setCheckbox(e.currentTarget.checked)}
        />
        <label htmlFor="invert">Invert</label>
      </div>
    </div>
  );
};

export default Threshold;
