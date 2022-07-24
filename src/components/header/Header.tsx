import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';
import { Mode } from './IconContainer';

interface HeaderProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const clickLink = () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/anoptic';
  link.target = '_blank';
  link.rel = 'noreferer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = ({ dark, setDark }: HeaderProps) => {
  // console.log(props);
  // const [dark, setDark] = useState(true);

  const handleClick = (mode: Mode) => {
    // console.log(e);
    if (mode === 'dark' || mode === 'light') setDark(!dark);
    if (mode === 'plain') clickLink();
  };

  return (
    <header>
      <p>Pixel Sorter</p>
      <div>
        <ModeSwitch dark={dark} handleClick={handleClick} />
        <LinkIcon handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
