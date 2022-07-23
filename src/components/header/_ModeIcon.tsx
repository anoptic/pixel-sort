// import { ActionIcon, Tooltip } from "@mantine/core";
import { ReactNode } from "react";

export interface ModeIconProps {
  label: string;
  children: ReactNode;
  // darkMode: boolean;
  // toggleColorScheme: () => void;
}

const ModeIcon = ({
  label,
  children,
}: ModeIconProps) => {
  // console.log(props);

  return (
    <>
      {/* <Tooltip label={label}>
        <ActionIcon
          // onClick={() => toggleColorScheme()}
          variant="hover"
        >
          {children}
        </ActionIcon>
      </Tooltip> */}
    </>
  );
};

export default ModeIcon;