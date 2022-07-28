import { useEffect, useState } from 'react';
import Controls from './controls/Controls';
import Canvas from './Canvas';
import imagePrep from '../funcs/imagePrep';
import useNewImage, { NewImageObject } from '../hooks/useNewImage';
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material';
import { fontWeight } from '@mui/system';

export interface PixelChoice {
  rgb: number[][];
  hsl: number[][];
}

const Sorter = () => {
  // console.log('Sorter');
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const [sortedImage, setSortedImage] = useState<number[] | undefined>(
    undefined
  );
  const [pixelChoice, setPixelChoice] = useState<PixelChoice | null>(null);
  const [imageDL, setImageDL] = useState<string | null>(null);
  const [newImageFlag, setNewImageFlag] = useState(false);
  const [init, setInit] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  // const newImageCache = useNewImage();
  const fetchResponse = useNewImage();

  // const handleSpinner = () => setSpinner(false);
  const handleErrorMessage = () => setErrorMessage(false);
  const handleSaveError = () => setSaveError(false);

  useEffect(() => {
    if (imageData) {
      // console.log('data', imageData);
      const { imagePixelsRGB, imagePixelsHSL } = imagePrep(imageData);
      setPixelChoice({ rgb: imagePixelsRGB, hsl: imagePixelsHSL });
    }
  }, [imageData]);

  return (
    <main>
      {/* <Backdrop
        open={spinner}
        // transitionDuration={0}
        // onClick={handleBackdrop}
        sx={{
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '-50%',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: 2,
          }}
        >
          Sorting…please wait
        </Typography>
        <CircularProgress color="inherit" />
      </Backdrop> */}

      <Dialog
        open={spinner}
        // onClick={handleSpinner}
        maxWidth="md"
        sx={{
          position: 'absolute',
          top: '-50%',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 4,
          '& .MuiDialogContent-root': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiDialogContentText-root': {
            color: 'text.primary',
            fontSize: 16,
            fontWeight: 700,
            margin: '16px 0 0',
          },
        }}
      >
        <DialogContent>
          <CircularProgress />
          <DialogContentText>Sorting…please wait</DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleSaveError}>Click anywhere to continue</Button> */}
        </DialogActions>
      </Dialog>

      <Dialog
        open={saveError}
        onClose={handleSaveError}
        maxWidth="md"
        sx={{
          position: 'absolute',
          top: '-50%',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 4,
          '& .MuiDialogContentText-root': {
            color: 'text.primary',
            fontSize: 16,
            fontWeight: 700,
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            Unable to save an unsorted image. Please sort image first.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveError}>Click anywhere to continue</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={errorMessage}
        onClose={handleErrorMessage}
        maxWidth="md"
        sx={{
          position: 'absolute',
          top: '-50%',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 4,
          // '& .MuiDialogContent-root': {
          //   backgroundColor: 'primary.dark',
          // },
          '& .MuiDialogContentText-root': {
            color: 'text.primary',
            fontSize: 16,
            fontWeight: 700,
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            An error ocurred while retrieving a new file. Please try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleErrorMessage}>
            Click anywhere to continue
          </Button>
        </DialogActions>
      </Dialog>

      <Canvas
        sortedImage={sortedImage}
        setImageData={setImageData}
        setImageDL={setImageDL}
        newImageFlag={newImageFlag}
        setNewImageFlag={setNewImageFlag}
        newImageCache={fetchResponse}
        init={init}
        setSpinner={setSpinner}
      />

      <Controls
        pixelChoice={pixelChoice}
        setSortedImage={setSortedImage}
        imageDL={imageDL}
        setNewImageFlag={setNewImageFlag}
        setInit={setInit}
        fetchError={fetchResponse ? false : true}
        setSpinner={setSpinner}
        setErrorMessage={setErrorMessage}
        setSaveError={setSaveError}
        setImageDL={setImageDL}
      />
    </main>
  );
};

export default Sorter;
