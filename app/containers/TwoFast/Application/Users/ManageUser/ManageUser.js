/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import UserList from './Userlist/UserList';
import UserDataTable from './UserDataTable';
import CreateUser from './CreateUser/CreateUser';
// import CreateDone from './CreateUser/CreateDone';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CreateDone from './CreateUser/CreateDone';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

  const [currentUsers, setCurrentUsers] = useState(0);
  const usersCount = {
    MAX_USERS: 5,
    currentUsers: currentUsers,
  };

  const [userData, setUserData] = useState({ username: '', password: '' });
  const [newUserModal, setNewUserModal] = useState(false);
  const [nextStepStatus, setnextStepStatus] = useState(false);
  const [completeAlert, setCompleteAlert] = useState(false);
  const [userDataStack, setUserDataStack] = useState([]);
  const [userMenu, setUsermenu] = useState(null);

  const newUserPopModal = () => {
    setNewUserModal(true);
  };

  const newUserCloseModal = () => {
    setNewUserModal(false);
    setCompleteAlert(false);
  };

  const closeNextStep = () => {
    setnextStepStatus(false);
  };

  const userAlertCloseHandle = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCompleteAlert(false);
  };

  const userMenuPop = (event) => {
    setUsermenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUsermenu(null);
  };

  const userInformation = (username, password) => {
    setUserData({ username: username, password: password });
    if (username && password != '') {
      // setCompleteAlert(true);
      setNewUserModal(false);
      setnextStepStatus(true);
      setCurrentUsers((state) => state + 1);
      setUserDataStack((state) => {
        const data = [...state];
        data.push({
          username: username,
          password: password,
        });
        return data;
      });
    }
  };

  let createUserModal = null;
  if (newUserModal) {
    createUserModal = (
      <CreateUser
        opened={newUserModal}
        handleClose={newUserCloseModal}
        submited={userInformation}
        userModalStatus={completeAlert}
        userModalClose={userAlertCloseHandle}
        users={usersCount}
      />
    );
  }

  const [errorUsers, setErrorUsers] = useState(false);
  const popAlert = () => {
    setErrorUsers(true);
  };
  const disAlert = () => {
    setErrorUsers(false);
  };
  let maxUsersAlert = (
    <Snackbar
      open={errorUsers}
      autoHideDuration={6000}
      onClose={disAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={disAlert} severity="error">
        User has reach limit.
      </Alert>
    </Snackbar>
  );

  useEffect(() => {
    console.log(userDataStack);
    console.log(usersCount);
    // console.log(nextStepStatus);
  }, [userDataStack, currentUsers]);

  let nextStepModal = null;
  if (nextStepStatus) {
    nextStepModal = (
      <CreateDone modalStatus={nextStepStatus} closeModal={closeNextStep} />
    );
  }
  return (
    <div>
      {createUserModal}
      {nextStepModal}
      {maxUsersAlert}
      <Grid container direction="row">
        <div className={classes.headerBox}>
          <p className={classes.userlistText}>User Recent Create</p>
          <Button
            variant="outlined"
            color="primary"
            onClick={currentUsers < 5 ? newUserPopModal : popAlert}
            startIcon={<PersonAdd />}
          >
            Create User
          </Button>
        </div>
        <Paper elevation={1} className={classes.contentPaper}>
          <Grid container justify="center">
            <UserList />
          </Grid>
        </Paper>
        <div className={classes.dataTableBox}>
          <UserDataTable
            users={usersCount}
            userStatus={userMenu}
            popMenu={userMenuPop}
            closeMenu={userMenuClose}
          />
        </div>
      </Grid>
    </div>
  );
};

export default ManageUser;
