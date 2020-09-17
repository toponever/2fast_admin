/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import avatars from '../../../../api/images/avatars';
import axios from 'axios';

import { userData } from '../../dummy-data/dummy-user';

const useStyles = makeStyles({
  div: {
    width: '96%',
  },
  contentGrid: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  paper: {
    display: 'flex',
    padding: '12px',
    alignItems: 'center',
  },
  profileImageBox: {
    borderRadius: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    boxShadow: '1px 1px 2px black',
  },
  Image: {
    width: '58px',
  },
  userDetail: {
    display: 'grid',
    paddingLeft: '20px',
  },
  grid: {
    // height: '500px',
    // overflow: 'auto',
  },
});

const UserList = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);

  const UserCard = () => {
    return (
      <Grid item md={3}>
        <Paper elevation={2} className={classes.paper}>
          <div className={classes.profileImageBox}>
            <img src={avatars[0]} className={classes.Image} />
          </div>
          <div className={classes.userDetail}>
            <Typography />
            <Typography>CEO</Typography>
          </div>
        </Paper>
      </Grid>
    );
  };

  useEffect(() => {
    const getData = [];
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      // console.log(res.data);
      const dataTest = res.data;
      dataTest.map((key) => {
        // console.log(key)
        getData.push({
          name: key.name,
        });
      });
      setUserData(dataTest);
    });
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const TestData = (props) => {
    const { data } = props;
    // console.log(data);
    // data.map((key) => {
    //   console.log(key);
    // });
    return (
      <div>
        {/* {data.map((key) => (
          <div>{key.name}</div>
        ))} */}
      </div>
    );
  };

  // const test2 = userData.map((value, index) => {
  //   return <Hello key={index} name={value.name} />;
  // });

  return (
    <div className={classes.div}>
      <Grid
        container
        spacing={3}
        direction="row"
        className={classes.contentGrid}
        wrap="wrap"
        className={classes.grid}
      >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Grid>
    </div>
  );
};

export default UserList;
