import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';

const Header = () => {
  // console.log(props);

  return (
    <header className="column header">
      <p>Pixel Sorter</p>
      <div className="icons">
        <ModeSwitch />
        <LinkIcon />
      </div>
    </header>
  );
};

export default Header;
