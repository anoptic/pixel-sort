import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { Message } from './Sorter';

interface MessageProps {
  message: Message;
  setMessage: (message: Message) => void;
}

const Messages = ({ message, setMessage }: MessageProps) => {
  const handleClose = () => setMessage({ open: false, type: null });

  const messages = {
    sort: (
      <>
        <DialogContent>
          <CircularProgress />
          <DialogContentText>Sorting…please wait</DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </>
    ),
    save: (
      <>
        <DialogContent>
          <DialogContentText>
            Unable to save an unsorted image. Please sort image first.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Click anywhere to continue</Button>
        </DialogActions>
      </>
    ),
    refresh: (
      <>
        <DialogContent>
          <DialogContentText>
            An error ocurred while retrieving a new file. Please try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Click anywhere to continue</Button>
        </DialogActions>
      </>
    ),
  };

  return (
    <>
      <Dialog
        open={message.open}
        onClose={() => handleClose()}
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
          '& .MuiCircularProgress-root': {
            margin: '16px 0 0',
          },
        }}
      >
        {message.type && messages[message.type]}
      </Dialog>
    </>
  );
};

export default Messages;
