/* eslint-disable */
import React from 'react';
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import { userData } from '../dummy-data/dummy-user';

const UserDataTable = (props) => {
  const { users } = props;
  const columns = ['Name', 'Role', 'Team', 'Latest Active'];
  const data = [];
  userData.map((key) => {
    data.push([
      <div>
        <Avatar name={key.name} size="50" round={true} /> {key.name}
      </div>,
      key.role,
      key.team,
      key.lastact,
      <div>
        <Fab color="primary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
      </div>,
    ]);
  });
  // console.log(userData);
  // console.log(data);

  const options = {
    filterType: 'checkbox',
    print: false,
  };
  return (
    <MUIDataTable
      title={
        'Users Management  ( ' +
        users.currentUsers +
        ' / ' +
        users.MAX_USERS +
        ' )'
      }
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default UserDataTable;
