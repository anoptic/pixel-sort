import useSWR from 'swr';

export interface NewImageObject {
  newImage: string;
  imageCreditLink: string;
  imageCreditName: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    mode: 'cors',
    headers: {
      'Authorization': `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      'Accept-Version': 'v1',
    },
  });
  return await res.json();
};

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useNewImage = (url: string) => {
  console.log('useNewImage');
  const { data, error } = useSWR(
    // `https://api.unsplash.com/photos/random/?client_id=${
    //   import.meta.env.VITE_ACCESS_KEY
    // }`,
    // 'https://api.unsplash.com/photos/random/',
    url,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      // revalidateOnMount must be true or it doesn't work
      // apparently, it means validate on mount
    }
  );
  const newImg: NewImageObject = {
    newImage: '',
    imageCreditLink: '',
    imageCreditName: '',
  }; 
  
  // if (error) console.log(error);
  // if (!data) console.log('Thinking about it...');
  if (data) {
    // console.log('!!!DATA!!!');
    const randomImage = data.urls.raw + '&w=720&h=480&fit=crop&crop=entropy';
    const imageCreditLink = data.user.links.html;
    const imageCreditName = data.user.name;
    newImg.newImage = randomImage;
    newImg.imageCreditLink = imageCreditLink;
    newImg.imageCreditName = imageCreditName;
  }

  return {
    newImageCache: newImg,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useNewImage;
