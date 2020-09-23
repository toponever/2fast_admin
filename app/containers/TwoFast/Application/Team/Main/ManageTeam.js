/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from 'react-avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';

import Grid from '@material-ui/core/Grid';
import { Controller, useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import randomcolor from 'randomcolor';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { ManageTeamStyle } from './ManageTeamStyle';
import { TEAM_LIST } from '../dummy-data/dummy-team';
import DetailEx from '../TeamDetail/DetailEx';
// import TeamDetail from './TeamDetail/TeamDetailTable';

// console.log(ManageTeamStyle);

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
    // console.log(history);
    // const state = {
    //   name: 'toei',
    //   id: 55,
    // };
    const url = history.location.pathname + '/hey';
    history.push(url);
  };

  const TeamCard = (
    <Grid item xs={3} md={3} onClick={teamDetailHandler}>
      <Paper elevation={6} className={classes.paperItem}>
        <div className={classes.pinColor} />
        <div className={classes.subPaperItem}>
          <div className={classes.cardTop}>
            <Grid container direction="row">
              <Grid item xs={3}>
                <div className={classes.teamLogo} />
              </Grid>
              <Grid item xs={6} className={classes.teamName}>
                <p className={classes.teamNameText}>Alpha</p>
                <div className={classes.teamNameAvatarBox}>
                  <AvatarGroup
                    max={4}
                    className={classes.teamNameAvatar}
                    spacing={10}
                  >
                    <Avatar name="Kfdsa Tfdsafs" size="38" round={true} />
                    <Avatar name="Pdf Pfdsa" size="38" round={true} />
                    <Avatar name="Pfdsa Rfdas" size="38" round={true} />
                    <Avatar name="Nfdsa Kfdsa" size="38" round={true} />
                    <Avatar name="Sfdsa Sfdsa" size="38" round={true} />
                  </AvatarGroup>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.teamStatus}>
                  <CheckCircle className={classes.teamStatusIcon} />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.cardMiddle}>
            <p className={classes.desHead}>Description</p>
            <div className={classes.desCon}>
              <p className={classes.desConText}>hello world</p>
            </div>
          </div>
          <div className={classes.cardHR} />
          <div className={classes.cardBottom}>
            <Grid container direction="row">
              <Grid item xs={4}>
                <p className={classes.memberText1}>10</p>
                <p className={classes.memberText2}>Users</p>
              </Grid>
              <Grid item xs={4}>
                <p className={classes.memberText1}>19/09/20</p>
                <p className={classes.memberText2}>Created</p>
              </Grid>
              <Grid item xs={4}>
                {/* <p className={classes.memberText1}>10</p>
                      <p className={classes.memberText2}>Users</p> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </Grid>
  );

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
      {/* <div> */}
      <Route
        path="/app/manage-team/hey"
        render={() => <DetailEx data={testData} />}
      />
      <Route path="/app/manage-team">
        {/* {content} */}
        {AddNewTeam}
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
          <Grid container direction="row" spacing={3}>
            {TeamCard}
          </Grid>
        </div>
      </Route>
      {/* </div> */}
    </Switch>
  );
};

export default ManageTeam;
