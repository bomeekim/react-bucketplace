import {useEffect, useState} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default function AlertDialog({ showDialog, contentText, clickCloseFunc }) {
  const [open, setOpen] = useState(showDialog);

  const handleClose = () => {
    setOpen(false);
    clickCloseFunc(false);
  };

  useEffect(() => {
    setOpen(showDialog);
  }, [showDialog])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {"아래 상품의 결제를 진행하시겠어요?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '12px' }}>
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
