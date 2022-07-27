import { useQuery } from '@tanstack/react-query';
// import useSWR from 'swr';

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

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useNewImage = () => {
  // console.log('useNewImage');

  const { data, error, isLoading, isError } = useQuery(['random'], fetcher, {
    staleTime: Infinity,
    // retry: false,
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
    // console.log('!!!DATA!!!');
    const randomImage = data.urls.raw + '&w=720&h=480&fit=crop&crop=faces,center';
    const imageCreditLink = data.user.links.html;
    const imageCreditName = data.user.name;
    newImg.newImage = randomImage;
    newImg.imageCreditLink = imageCreditLink;
    newImg.imageCreditName = imageCreditName;

    return newImg;
  }
};

export default useNewImage;
