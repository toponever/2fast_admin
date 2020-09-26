/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { ManageTeamStyle } from './ManageTeamStyle';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import CardInfo from '../CardInfo/CardInfo';

const useStyles = ManageTeamStyle;

const ManageTeam = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { handleSubmit, errors, control } = useForm();

  const [newTeam, setNewTeam] = useState(false);

  const popNewTeam = () => {
    setNewTeam(true);
  };
  const closeNewteam = () => {
    setNewTeam(false);
  };

  const teamDetailHandler = () => {
    const url = history.location.pathname + '/hey';
    history.push(url);
  };

  const AddNewTeam = (
    <Dialog
      open={newTeam}
      maxWidth="xs"
      fullWidth={true}
      // onClose={closeNewteam}
      //   keepMounted
    >
      <div className={classes.dialogTextHeaderBox}>
        <p className={classes.dialogTextHeader}>Create New Team</p>
      </div>
      <div className={classes.divForm}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <FormControl style={{ width: '70%' }}>
            <InputLabel style={{ fontSize: '13px' }}>Team name</InputLabel>
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
                'Team name is required'}
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
            <Button color="primary" variant="outlined" onClick={closeNewteam}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  );

  useEffect(() => {
    console.log(history);
    // console.log(location);
  }, []);

  const testData = {
    name: 'puk',
    god: 'naphat',
  };

  return (
    <Switch>
      <Route
        path="/app/manage-team/hey"
        render={() => <DetailEx data={testData} />}
      />
      <Route path="/app/manage-team">
        {AddNewTeam}
        <Paper
          style={{
            background: '#ababab0d',
          }}
        >
          <div className={classes.headerBox}>
            <div className={classes.divText}>
              <p className={classes.headerText}>Team</p>
            </div>
            {/* <div>
              <Tooltip title="Add New Team" onClick={popNewTeam}>
              <Fab color="secondary" size="small" className={classes.fab}>
                <Add />
              </Fab>
            </Tooltip>
            </div> */}
          </div>
          <CardInfo />
        </Paper>
      </Route>
    </Switch>
  );
};

export default ManageTeam;
