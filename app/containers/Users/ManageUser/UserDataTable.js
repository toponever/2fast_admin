/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import Avatar from 'react-avatar';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

import { userData } from '../dummy-data/dummy-user';

const useStyles = makeStyles({
  rowName: {},
  rowLastactive: {},
  userMenuList: {},
});

const UserDataTable = (props) => {
  const classes = useStyles();
  const { users, userStatus, popMenu, closeMenu } = props;
  const columns = ['Name', 'Role', 'Team', 'Latest Active'];
  const data = [];
  userData.map((key) => {
    data.push([
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            boxShadow: '0px  0px 2px black',
            borderRadius: '150px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            boxShadow: '0px 0px 3px black',
            marginRight: '11px',
          }}
        >
          <Avatar name={key.name} size="50" round={true} />
        </div>{' '}
        {key.name}
      </div>,
      key.role,
      key.team,
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {key.lastact}
        <IconButton
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={popMenu}
        >
          <MoreVert />
        </IconButton>

        <Menu
          id="user-menu"
          anchorEl={userStatus}
          keepMounted
          open={Boolean(userStatus)}
          onClose={closeMenu}
          elevation={1}
        >
          <MenuItem onClick={closeMenu}>Edit Profile</MenuItem>
          <MenuItem onClick={closeMenu}>Move</MenuItem>
          <MenuItem onClick={closeMenu}>Delete</MenuItem>
        </Menu>
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
