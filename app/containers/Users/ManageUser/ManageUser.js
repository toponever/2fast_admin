/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';

import UserList from './Userlist/UserList';
import UserDataTable from './UserDataTable';
import CreateUser from './CreateUser';

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
  const [userData, setUserData] = useState({});
  // const [userData, setUserData] = useState([]);

  const handleClickOpen = () => {
    setNewUserModal(true);
  };
  const handleClose = () => {
    setNewUserModal(false);
  };

  const userInformation = (username, password) => {
    setUserData({ username: username, password: password });
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
        handleClose={handleClose}
        submited={userInformation}
      />
    );
  }

  useEffect(() => {
    // console.log(userData);
  }, [userData]);

  return (
    <div>
      {createUserModal}
      <Grid container direction="row">
        <div className={classes.headerBox}>
          <p className={classes.userlistText}>User Recent Create</p>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
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
          <UserDataTable />
        </div>
      </Grid>
    </div>
  );
};

export default ManageUser;
