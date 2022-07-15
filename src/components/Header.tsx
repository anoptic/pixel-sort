import { Text } from '@mantine/core';
import LinkIcon from './controls/LinkIcon';
import ModeSwitch from './controls/ModeSwitch';

const Header = () => {
  // console.log(props);

  return (
    <header className="column header">
      <Text size="xl" weight={400} mb="md">
        Pixel Sorter
      </Text>
      <div>
        <ModeSwitch />
        <LinkIcon />
      </div>
    </header>
  );
};

export default Header;
