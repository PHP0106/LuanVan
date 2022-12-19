import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Modal(
    { 
        title,
        content,
        clrBtnLeft,
        txtBtnLeft,
        clrBtnRight,
        txtBtnRight,
        open,
        setOpen,
        handleSubmit
    }
) {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title ? title : ""}
            </DialogTitle>
            <DialogContent>
                {content ? content : ""}
            </DialogContent>
            <DialogActions>
                <Button 
                    color={clrBtnLeft ? clrBtnLeft : "secondary"}
                    onClick={() => setOpen(!open)}
                >
                    {txtBtnLeft ? txtBtnLeft : "Cancel"}
                </Button >

                <Button
                    color={clrBtnRight ? clrBtnRight : "success"}
                    onClick={() => handleSubmit()}
                >
                    {txtBtnRight ? txtBtnRight : "Confirm"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal