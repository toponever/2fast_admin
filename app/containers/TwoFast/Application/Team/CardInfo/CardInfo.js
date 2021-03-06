/* eslint-disable */
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { CardInfoStyle } from './CardInfoStyle';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from 'react-avatar';

import { Paper, Grid, ButtonBase } from '@material-ui/core';
import {
  AddCircleOutlineOutlined,
  AddCircle,
  CheckCircleRounded,
} from '@material-ui/icons';

const CardInfo = (props) => {
  const { addnewteam, data } = props;
  // const history = useHistory();
  const classes = CardInfoStyle();

  // console.log(history);

  const addNewTeam = (
    <Grid item xs={3}>
      <ButtonBase className={classes.buttonBase} onClick={addnewteam}>
        <Paper elevation={1} className={classes.newteamCard}>
          <div className={classes.card}>
            <div className={classes.newteamContent}>
              <AddCircle className={classes.newteamAddIcon} />
              <p className={classes.newteamText}>Create Team</p>
            </div>
          </div>
        </Paper>
      </ButtonBase>
    </Grid>
  );

  return (
    <div className={classes.div}>
      <Grid container spacing={3}>
        {addNewTeam}

        {data.map((key) => (
          <Grid
            item
            xs={3}
            key={key.team_id}
            onClick={() => {
              console.log(key.team_name);
              // history.push('/app/manage-team/' + key.team_name);
            }}
          >
            <Paper elevation={1} className={classes.paperCard}>
              <div className={classes.card}>
                <div className={classes.topCard}>
                  <div className={classes.teamLogo} />
                  <div className={classes.teamName}>{key.team_name}</div>
                  <div className={classes.activeIconBox}>
                    <CheckCircleRounded className={classes.activeIcon} />
                  </div>
                </div>
                <div className={classes.bottomCard}>
                  <AvatarGroup
                    max={4}
                    className={classes.teamNameAvatar}
                    spacing={8}
                  >
                    <Avatar name="Pdf Pfdsa" size="35" round={true} />
                    <Avatar name="Pfdsa Rfdas" size="35" round={true} />
                    <Avatar name="Nfdsa Kfdsa" size="35" round={true} />
                    <Avatar name="Pdf Pfdsa" size="35" round={true} />
                    <Avatar name="Pfdsa Rfdas" size="35" round={true} />
                    <Avatar name="Nfdsa Kfdsa" size="35" round={true} />
                    <Avatar name="Sfdsa Sfdsa" size="35" round={true} />
                  </AvatarGroup>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardInfo;
