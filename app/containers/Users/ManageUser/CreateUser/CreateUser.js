/* eslint-disable */
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
// import { FormControlLabel } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

import { useForm, Controller } from 'react-hook-form';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

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
  const {
    opened,
    handleClose,
    submited,
    userModalStatus,
    userModalClose,
    users,
  } = props;

  const username = useRef();
  const password = useRef();

  const { register, control, handleSubmit } = useForm();

  const getUserValue = (event) => {
    event.preventDefault();
    const u = username.current.children[0].value;
    const p = password.current.children[0].value;
    submited(u, p);
  };

  let userSuccessAlert = null;
  if (userModalStatus) {
    userSuccessAlert = (
      <Snackbar
        open={userModalStatus}
        autoHideDuration={6000}
        onClose={userModalClose}
        className={classes.snackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={userModalClose} severity="success">
          User has been created successfully.
        </Alert>
      </Snackbar>
    );
  }

  let createUserDialog;
  createUserDialog = (
    <Dialog
      open={opened}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
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
            {/* <form onSubmit={getUserValue} className={classes.form}> */}
            <form
              onSubmit={handleSubmit((data) => console.log(data))}
              className={classes.form}
            >
              <FormControl>
                <InputLabel required>Username</InputLabel>
                {/* <Input placeholder="username" ref={username} required /> */}
                {/* <Input
                  placeholder="username"
                  ref={username}
                  required
                  inputRef={register}
                  name="username"
                /> */}
                <Controller
                  as={Input}
                  name="username"
                  placeholder="USERNAME"
                  required
                  control={control}
                />
              </FormControl>
              <FormControl>
                <InputLabel required>Password</InputLabel>
                {/* <Input
                  placeholder="password"
                  ref={password}
                  type="password"
                  required
                /> */}
                <Input
                  placeholder="password"
                  inputRef={register}
                  name="password"
                  type="password"
                  required
                />
              </FormControl>
              <div className={classes.userStatus}>
                <div className={classes.userStatusInside}>
                  <p className={classes.userStatusP}>
                    Max users : {users.currentUsers} / {users.MAX_USERS}
                  </p>
                </div>
              </div>
              <div className={classes.actionBox}>
                <Button color="primary" variant="contained" type="submit">
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
  );

  return <div>{createUserDialog}</div>;
};

CreateUser.propTypes = {
  opened: PropTypes.bool,
  handleClose: PropTypes.func,
  submited: PropTypes.func,
  userModalStatus: PropTypes.bool,
  userModalClose: PropTypes.func,
  users: PropTypes.object,
};

export default CreateUser;
