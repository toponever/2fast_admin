/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import UserList from './Userlist/UserList';
import UserDataTable from './UserDataTable';
import CreateUser from './CreateUser';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles({
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: '15px',
  },
  userlistText: {
    marginLeft: '21px',
    marginTop: '7px',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    // textShadow: '0px 0px 0px #a0a0a0',
    // color: '#4dabf5',
  },
  contentPaper: {
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  dataTableBox: {
    width: '100%',
    paddingTop: '14px',
  },
});

const ManageUser = () => {
  const classes = useStyles();

  const [newUserModal, setNewUserModal] = useState(false);
  const [userData, setUserData] = useState([]);

  const newUserPopModal = () => {
    setNewUserModal(true);
  };
  const newUserCloseModal = () => {
    setNewUserModal(false);
  };

  // const [completeAlert, setCompleteAlert] = useState(false);
  // const userAlertPopHandle = () => {
  //   setCompleteAlert(true);
  // };
  // const userAlertCloseHandle = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setCompleteAlert(false);
  // };

  const userInformation = (username, password) => {
    setUserData({ username: username, password: password });
    // setCompleteAlert(true);
    // setUserData((state) => {
    //   let oldData = [...state];
    //   let newData = { u: username, pwd: password };
    //   oldData.push(newData);
    //   return oldData;
    // });
  };

  let createUserModal = null;
  if (newUserModal) {
    createUserModal = (
      <CreateUser
        opened={newUserModal}
        handleClose={newUserCloseModal}
        submited={userInformation}
      />
    );
  }

  // let userSuccessAlert = null;
  // if (completeAlert) {
  //   userSuccessAlert = (
  //     <Snackbar open={completeAlert} autoHideDuration={6000} onClose={userAlertCloseHandle}>
  //       <Alert onClose={userAlertCloseHandle} severity="success">
  //         This is a success message!
  //       </Alert>
  //     </Snackbar>
  //   );
  // }

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      {createUserModal}
      {/* {userSuccessAlert} */}
      <Grid container direction="row">
        <div className={classes.headerBox}>
          <p className={classes.userlistText}>User Recent Create</p>
          <Button
            variant="outlined"
            color="primary"
            onClick={newUserPopModal}
            startIcon={<PersonAdd />}
          >
            Create User
          </Button>
        </div>
        <Paper elevation={1} className={classes.contentPaper}>
          {/* <UserDataTable /> */}
          <Grid container justify="center">
            <UserList />
          </Grid>
        </Paper>
        <div className={classes.dataTableBox}>
          {/* <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              This is a success message!
            </Alert>
          </Snackbar> */}
        </div>
      </Grid>
    </div>
  );
};

export default ManageUser;
