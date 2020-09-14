/* eslint-disable */
import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    background: '#404040',
  },
  contentText: {
    textAlign: 'center',
    paddingTop: '18px',
  },
  formInput: {
    width: '100%',
  },
  buttonBox: {
    paddingTop: '15px',
    textAlign: 'end',
  },
  button: {},
});

const CreateUser = (props) => {
  const classes = useStyles();

  const initData = {
    username: '',
    password: '',
  };
  const [userData, setUserData] = useState(initData);
  const [status, setStatus] = useState(false);

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const testLog = () => {
    console.log(userData);
  };

  const submit = (event) => {
    event.preventDefault();
    setUserData({
      username: usernameInput.current.children[0].value,
      password: passwordInput.current.children[0].value,
    });
    // console.log(usernameInput.current.children[0].value);
  };

  useEffect(() => {
    // alert(2);
    console.log('LOAD PAGE');
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  // const usernameHandler = (event) => {
  //   console.log(event.currentTarget)
  // }

  // const resetUserData = () => {
  //   setUserData(initData);
  // };

  // console.log(userData);

  return (
    <div>
      <Grid
        container
        spacing={3}
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <div className={classes.contentText}>
              <Typography variant="h5" component="h3">
                Create User
              </Typography>
              {/* <Typography component="p">presssssss</Typography> */}
            </div>
            <form onSubmit={submit} style={{ padding: '20px' }}>
              <FormControl className={classes.formInput}>
                <InputLabel required>Username</InputLabel>
                <Input
                  // id="username"
                  placeholder="Username"
                  required
                  ref={usernameInput}
                  // value={userData.username}
                  // onInput={(event) => usernameHandler(event)}
                />
              </FormControl>
              <FormControl className={classes.formInput}>
                <InputLabel>Password</InputLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  ref={passwordInput}
                />
              </FormControl>
              <div className={classes.buttonBox}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: '5px' }}
                >
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  // onClick={resetUserData}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateUser;
