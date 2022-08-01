import { useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export interface NewImageObject {
  newImage: string;
  imageCreditLink: string;
  imageCreditName: string;
}

const url = 'https://api.unsplash.com/photos/random/';

const fetcher = async () => {
  const res = await fetch(url, {
    mode: 'cors',
    headers: {
      'Authorization': `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      'Accept-Version': 'v1',
    },
  });
  if (!res.ok) throw new Error('Network request error');
  return await res.json();
};

const useNewImage = () => {
  const matches = useMediaQuery('(max-width: 767px)');
  const { data, error } = useQuery(['random'], fetcher, {
    staleTime: Infinity,
    retry: 3,
    retryDelay: (attempt) => attempt * 10000,
    // enabled: false,
  });

  const newImg: NewImageObject = {
    newImage: '',
    imageCreditLink: '',
    imageCreditName: '',
  };

  if (error) {
    return newImg;
  }

  if (data) {
    const randomImage = data.urls.raw + (matches ? '&w=360&h=480&fit=crop&crop=faces,center' : '&w=720&h=480&fit=crop&crop=faces,center');
    const imageCreditLink = data.user.links.html;
    const imageCreditName = data.user.name;
    newImg.newImage = randomImage;
    newImg.imageCreditLink = imageCreditLink;
    newImg.imageCreditName = imageCreditName;

    return newImg;
  }
};

export default useNewImage;
