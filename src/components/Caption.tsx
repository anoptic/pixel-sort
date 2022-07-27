import { Link, styled } from '@mui/material';
import { fontSize } from '@mui/system';
import { NewImageObject } from '../hooks/useNewImage';

interface CaptionProps {
  init: boolean;
  captionName: string | undefined;
  captionLink: string | undefined;
}

const FigCaption = styled('figcaption')({
  fontFamily: 'inherit',
  fontSize: '12px',
  padding: '0 4rem',
  textAlign: 'right',
})
const Anchor = styled('a')({
  color: 'error',
  textDecoration: 'none',
  '& .MuiLink-root': {
    color: 'error',
  },
});

const Caption = ({ init, captionName, captionLink }: CaptionProps) => {
  // console.log(newImageFlag);

  if (init) {
    return <FigCaption>Colorful heads</FigCaption>;
  }
  return (
    <FigCaption>
      Photo by{' '}
      <Link
        color="text.secondary"
        underline="hover"
        href={captionLink + '?utm_source=your_app_name&utm_medium=referral'}
        target="_blank"
        rel="noreferrer"
      >
        {captionName}
      </Link>{' '}
      on{' '}
      <Link
        color="text.secondary"
        underline="hover"
        target="_blank"
        rel="noreferrer"
        href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
      >
        Unsplash
      </Link>
    </FigCaption>
  );
};

export default Caption;
