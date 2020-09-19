/* eslint-disable */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Controller, useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const ManageTeam = (props) => {
  const classes = useStyles();

  const { handleSubmit, errors, control, register } = useForm();

  const [newTeam, setNewTeam] = useState(true);

  const popNewTeam = () => {
    setNewTeam(true);
  };
  const closeNewteam = () => {
    setNewTeam(false);
  };

  return (
    <div>
      <div className={classes.headerBox}>
        <div className={classes.divText}>
          <p className={classes.headerText}>Team</p>
        </div>
        <div>
          <Tooltip title="Add New Team" onClick={popNewTeam}>
            <Fab color="secondary" size="small" className={classes.fab}>
              <Add />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <div>
        <Dialog
          open={newTeam}
          // onClose={closeNewteam}
          maxWidth="xs"
          fullWidth={true}
        //   keepMounted
        >
          <div className={classes.dialogTextHeaderBox}>
            <p className={classes.dialogTextHeader}>Create New Team</p>
          </div>
          <div className={classes.divForm}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <FormControl style={{ width: '70%' }}>
                <InputLabel style={{ fontSize: '13px' }}>Team Name</InputLabel>
                <Controller
                  as={Input}
                  name="teamname"
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[A-Za-z0-9][A-Za-z0-9]*$/i,
                      message: 'invalid type',
                    },
                  }}
                />
                <div className={classes.teamNameError}>
                  {errors.teamname &&
                    errors.teamname.type === 'required' &&
                    'Team Name is required'}
                  {errors.teamname &&
                    errors.teamname.type === 'pattern' &&
                    'invalid type'}
                </div>
              </FormControl>
              <div className={classes.actionBox}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  style={{ marginRight: '10px' }}
                >
                  Confirm
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={closeNewteam}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  divText: {
    marginRight: '15px',
  },
  headerText: {
    fontSize: '1.9rem',
    margin: 0,
    textShadow: '0px 0px 1px black',
  },
  fab: {
    backgroundColor: '#2cbfce',
    // '&:hover': {
    //   backgroundColor: '#2cbfce',
    // },
  },
  dialogTextHeaderBox: {
    textAlign: 'center',
    paddingTop: '15px',
    paddingBottom: '5px',
  },
  dialogTextHeader: {
    margin: 0,
    fontSize: '1.7rem',
  },
  divForm: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  actionBox: {
    marginTop: '24px',
    marginBottom: '24px',
  },
  teamNameError: {
    textAlign: 'left',
    marginTop: '3px',
    marginLeft: '9px',
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ManageTeam;
