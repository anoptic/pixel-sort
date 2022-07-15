import { Button } from "@mantine/core";
import { MouseEvent } from "react";
// import { ButtonsProps } from "./Buttons";

interface BtnProps {
  name: string;
  handleButton: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Btn = ({ name, handleButton }: BtnProps) => {
  // console.log(props);

  return (
    <>
      <Button
        name={name}
        className="ctrl-btn"
        type="button"
        onClick={handleButton}
      >
        {name}
      </Button>
    </>
  );
};

export default Btn;