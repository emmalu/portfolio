import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'fontsource-montserrat';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div className="flex justify-between align-middle items-center">
        <h6 className="text-lg inline-flex">{children}</h6>
        {onClose ? (
          <button className="hover:bg-ep-gray font-bold text-ep-blue-dark py-2 px-2 inline-flex items-center rounded-full" aria-label="close" onClick={onClose}>
            <CloseIcon />
          </button>
        ) : null}
      </div>
      
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="bg-gray-300 hover:bg-gray-400 font-bold text-ep-blue-dark py-2 px-2 rounded-full inline-flex items-center animate-pulse" onClick={handleClickOpen}>
        <InfoIcon />
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          What's in here?
        </DialogTitle>
        <DialogContent dividers>
          <div className="text-sm mb-3">
            The <span className="font-extrabold text-ep-blue-dark">map-centric applications</span> in this portfolio showcase some of my work—projects in which I've taken the Lead Developer role (writing &gt;&#61; 90% code).
          </div>
          <div className="text-sm mb-3">
            While <span className="font-extrabold text-ep-blue-dark">each project applies its own layout, content &amp; and features</span>, most applications are:
            <ul className="list-disc pl-4">
                <li>mobile-ready &amp; device agnostic</li>
                <li>built using tools like Esri's REST/JavaScript APIs</li>
                <li>written with responsive libraries (i.e. Materialize &amp; Bootstrap)</li>
                <li>supported by server-side PHP &amp; Python scripting to process data in <span className="font-extrabold text-ep-blue-dark">MS SQL &amp; MySQL</span> databases, as well as <span className="font-extrabold text-ep-blue-dark">REST &amp; SOAP web services</span></li>
            </ul>
          </div>
          <div className="text-sm my-3">
            Lastly, in efforts to pursue new skills and learn new tooling, this portfolio is written using the <span className="font-extrabold text-ep-blue-dark">React</span> framework. Enjoy!
          </div>
        </DialogContent>
        <DialogActions>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 inline-flex items-center rounded-md" onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}