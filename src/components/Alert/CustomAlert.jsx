import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Slide, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import T from 'prop-types';

const CustomAlert = ({ closeNotification, notification }) => (
  <div className="custom-alert">
    <Slide direction="left" in={!!notification.message} mountOnEnter unmountOnExit>
      <Alert
        severity="error"
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => closeNotification()}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {notification.message}
      </Alert>
    </Slide>
  </div>
);

CustomAlert.propTypes = {
  closeNotification: T.func.isRequired,
  notification: T.shape({
    message: T.string,
  }),
};

export default CustomAlert;
