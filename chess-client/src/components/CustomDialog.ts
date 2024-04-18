import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";

interface CustomDialogProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  contentText: string;
  handleContinue: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, children, title, contentText, handleContinue }) => {
  return (

    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {contentText}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleContinue}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
