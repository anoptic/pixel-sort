import { Link, styled, useMediaQuery } from '@mui/material';

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

const Caption = ({ init, captionName, captionLink }: CaptionProps) => {
  const matches = useMediaQuery('(max-width: 767px)');

  if (init) {
    return <FigCaption sx={{
      visibility: 'hidden',
    }}>Colorful heads</FigCaption>;
  }
  return (
    <FigCaption sx={[
      matches && {padding: '0 1rem'},
    ]}>
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
