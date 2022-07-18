import { Text } from '@mantine/core';
import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';

const Header = () => {
  // console.log(props);

  return (
    <header className="column header">
      <Text size="xl" weight={400} mb="md">
        Pixel Sorter
      </Text>
      <div className="icons">
        <ModeSwitch />
        <LinkIcon />
      </div>
    </header>
  );
};

export default Header;
