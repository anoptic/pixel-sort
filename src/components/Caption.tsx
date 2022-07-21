import { NewImageObject } from '../hooks/useNewImage';

interface CaptionProps {
  init: boolean;
  captionName: string | undefined;
  captionLink: string | undefined;
}

const Caption = ({ init, captionName, captionLink }: CaptionProps) => {
  // console.log(newImageFlag);

  if (init) {
    return <figcaption>Colorful heads</figcaption>;
  }
  return (
    <figcaption>
      Photo by{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href={captionLink + '?utm_source=your_app_name&utm_medium=referral'}
      >
        {captionName}
      </a>{' '}
      on{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
      >
        Unsplash
      </a>
    </figcaption>
  );
};

export default Caption;
