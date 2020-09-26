/* eslint-disable */
import React, { useEffect } from 'react';
import { CardInfoStyle } from './CardInfoStyle';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from 'react-avatar';

const CardInfo = (props) => {
  const classes = CardInfoStyle();

  const CardItem = (
    <Grid item xs={4}>
      <Paper elevation={1} className={classes.paperCard}>
        <div className={classes.card}>
          <div className={classes.topCard}>
            <div className={classes.teamLogo} />
            <div className={classes.teamName}>Audit</div>
          </div>
          <div className={classes.bottomCard}>
            <AvatarGroup max={7} className={classes.teamNameAvatar} spacing={-3}>
              <Avatar name="Kfdsa Tfdsafs" size="38" style={{color:'blue'}} round={true} />
              <Avatar name="Pdf Pfdsa" size="38" round={true} />
              <Avatar name="Pfdsa Rfdas" size="38" round={true} />
              <Avatar name="Nfdsa Kfdsa" size="38" round={true} />
              <Avatar name="Pdf Pfdsa" size="38" round={true} />
              <Avatar name="Pfdsa Rfdas" size="38" round={true} />
              <Avatar name="Nfdsa Kfdsa" size="38" round={true} />
              <Avatar name="Sfdsa Sfdsa" size="38" round={true} />
            </AvatarGroup>
          </div>
        </div>
      </Paper>
    </Grid>
  );

  return (
    <div className={classes.div}>
      <Grid container spacing={3}>
        {CardItem}        
        {CardItem}        
        {CardItem}        
        {CardItem}        
      </Grid>
    </div>
  );
};

export default CardInfo;
