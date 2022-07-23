import { useState } from 'react';
import LinkIcon from './LinkIcon';
import ModeSwitch from './ModeSwitch';
import { Mode } from './IconContainer';
import { styled } from '../../../stitches.config';

interface HeaderProps {
  dark: boolean
  setDark: (dark: boolean) => void
}

const HeaderContainer = styled('header', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1rem auto 0',
  width: '50%',
});

const Title = styled('h1', {
  all: 'unset',
  fontSize: '1.25em',
});

const clickLink = () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/anoptic';
  link.target = '_blank';
  link.rel = 'noreferer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = ({dark, setDark}: HeaderProps) => {
  // console.log(props);
  // const [dark, setDark] = useState(true);

  const handleClick = (mode: Mode) => {
    // console.log(e);
    if (mode === 'dark' || mode === 'light') setDark(!dark);
    if (mode === 'plain') clickLink();
  };

  return (
    <HeaderContainer>
      <Title>Pixel Sorter</Title>
      <div className="icons">
        <ModeSwitch dark={dark} handleClick={handleClick} />
        <LinkIcon handleClick={handleClick} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
