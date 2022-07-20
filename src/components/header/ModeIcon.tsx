import { ActionIcon, Tooltip } from "@mantine/core";
import { ReactNode } from "react";

export interface ModeIconProps {
  label: string;
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ModeIcon = ({
  label,
  children,
  darkMode,
  setDarkMode,
}: ModeIconProps) => {
  // console.log(props);

  return (
    <>
      <Tooltip label={label}>
        <ActionIcon onClick={() => setDarkMode(!darkMode)} variant="hover">
          {children}
        </ActionIcon>
      </Tooltip>
    </>
  );
};

export default ModeIcon;