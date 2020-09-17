/* eslint-disable */
import React from 'react';
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';

import { userData } from '../dummy-data/dummy-user';

const UserDataTable = (props) => {
  const { users } = props;
  const columns = ['Name', 'Role', 'Team', 'Latest Active',''];
  const testData = [];
  userData.map((key) => {
    testData.push([key.name, key.role, key.team, key.lastact]);
  });
  console.log(userData);
  console.log(testData);

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
      data={testData}
      columns={columns}
      options={options}
    />
  );
};

export default UserDataTable;
