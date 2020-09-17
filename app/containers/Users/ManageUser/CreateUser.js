/* eslint-disable */
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
// import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
// import { FormControlLabel } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  dialog: {
    width: '27%',
  },
  modalHeaderBox: {
    textAlign: 'center',
    paddingTop: '14px',
  },
  modalHeaderText: {
    margin: '0px',
    fontSize: '22px',
    fontWeight: '900',
  },
  formBox: {
    width: '82%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  userStatus: {
    paddingTop: '12px',
    paddingBottom: '7px',
    // display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  userStatusInside: {
    float: 'right',
    paddingBottom: '1px',
  },
  userStatusP: {
    margin: 0,
  },
  actionBox: {
    textAlign: 'center',
    paddingBottom: '10px',
  },
  cancelBtn: {
    marginLeft: '5px',
    paddingLeft: '14px',
    paddingRight: '14px',
  },
});

const CreateUser = (props) => {
  const classes = useStyles();
  const { opened, handleClose, submited } = props;
  const username = useRef();
  const password = useRef();
  const getUserValue = (event) => {
    event.preventDefault();
    const u = username.current.children[0].value;
    const p = password.current.children[0].value;
    submited(u, p);
  };

  const [completeAlert, setCompleteAlert] = useState(false);
  const userAlertPopHandle = () => {
    setCompleteAlert(true);
  };
  const userAlertCloseHandle = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCompleteAlert(false);
  };

  let userSuccessAlert = null;
  if (completeAlert) {
    userSuccessAlert = (
      <Snackbar
        open={completeAlert}
        autoHideDuration={6000}
        onClose={userAlertCloseHandle}
        className={classes.snackbar}

      >
        <Alert
          onClose={userAlertCloseHandle}
          severity="success"
          style={{ zIndex: '2000' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    );
  }

  // console.log(props);
  return (
    <div>
      
      <Dialog
        open={opened}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth={true}
      >
        <div className={classes.modalHeaderBox}>
          <p className={classes.modalHeaderText}>Create User</p>
        </div>
        <DialogContent>
          <Grid container justify="center">
            <div className={classes.formBox}>
              <form onSubmit={getUserValue} className={classes.form}>
                <FormControl>
                  <InputLabel required>Username</InputLabel>
                  <Input placeholder="username" ref={username} required />
                </FormControl>
                <FormControl>
                  <InputLabel required>Password</InputLabel>
                  <Input
                    placeholder="password"
                    ref={password}
                    type="password"
                    required
                  />
                </FormControl>
                <div className={classes.userStatus}>
                  <div className={classes.userStatusInside}>
                    <p className={classes.userStatusP}>Max users : 2 / 5</p>
                  </div>
                </div>
                <div className={classes.actionBox}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={userAlertPopHandle}
                  >
                    Create
                  </Button>
                  <Button
                    onClick={handleClose}
                    color="primary"
                    className={classes.cancelBtn}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
            {userSuccessAlert}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

CreateUser.propTypes = {
  opened: PropTypes.bool,
  handleClose: PropTypes.func,
  submited: PropTypes.func,
};

export default CreateUser;
