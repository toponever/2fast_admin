/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const UserCardDetail = (props) => {
  const { data } = props;

  const userData = [];
  for (let key in data) {
    userData.push({
      id: data[key].id,
    });
  }

  console.log(data);
  console.log(userData);

  userData.map((key)=>{
      console.log(key)
  })

  return (
    <div>
      {/* {data.map((key) => (
        <div>{key.id}</div>
      ))} */}
      <div></div>
    </div>
  );
};

export default UserCardDetail;
