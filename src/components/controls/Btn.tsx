import { MouseEvent } from 'react';
// import { ButtonsProps } from "./Buttons";

interface BtnProps {
  name: string;
  label: string;
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Btn = ({ name, label, handleButton }: BtnProps) => {
  // console.log(props);

  return (
    <>
      <button
        name={name}
        className="ctrl-btn"
        type="button"
        onClick={handleButton}
      >
        {name}
      </button>
    </>
  );
};

export default Btn;
