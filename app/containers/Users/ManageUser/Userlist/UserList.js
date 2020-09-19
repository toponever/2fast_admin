/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import avatars from '../../../../api/images/avatars';

import { userData } from '../../dummy-data/dummy-user';
import Avatar from 'react-avatar';

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
    boxShadow: '0px 0px 2px black',
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

  // const [userData, setUserData] = useState([]);

  // const UserCard = () => {
  //   return (
  //     <Grid item md={3}>
  //       <Paper elevation={2} className={classes.paper}>
  //         <div className={classes.profileImageBox}>
  //           <img src={avatars[0]} className={classes.Image} />
  //         </div>
  //         <div className={classes.userDetail}>
  //           <Typography>Jonh Sownah</Typography>
  //           <Typography>CEO</Typography>
  //         </div>
  //       </Paper>
  //     </Grid>
  //   );
  // };
  // console.log(userData);
  // const FetchUser = () => {
  //   return (
  //     <div>
  //       {userData.map((key, index) => (
  //         <Grid item md={3} key={index}>
  //           <Paper elevation={2} className={classes.paper}>
  //             <div className={classes.profileImageBox}>
  //               <img src={avatars[0]} className={classes.Image} />
  //             </div>
  //             <div className={classes.userDetail}>
  //               <Typography>{key.name}</Typography>
  //               <Typography>{key.role}</Typography>
  //             </div>
  //           </Paper>
  //         </Grid>
  //       ))}
  //     </div>
  //   );
  // };

  // useEffect(() => {
  //   const getData = [];
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  //     console.log(res.data);
  //     const dataTest = res.data;
  //     dataTest.map((key) => {
  //       console.log(key)
  //       getData.push({
  //         name: key.name,
  //       });
  //     });
  //     setUserData(dataTest);
  //   });
  // }, []);

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
        {userData.map((key, index) => (
          <Grid item md={3} key={index}>
            <Paper elevation={2} className={classes.paper}>
              <div className={classes.profileImageBox}>
                {/* <img src={avatars[0]} className={classes.Image} /> */}
                <Avatar name={key.name} size="60" round={true} />
              </div>
              <div className={classes.userDetail}>
                <Typography>{key.name}</Typography>
                <Typography>{key.role}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

// UserList.propTypes = {

// };

export default UserList;
