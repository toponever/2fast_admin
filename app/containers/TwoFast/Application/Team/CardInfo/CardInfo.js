import React from 'react';



const CardInfo = () => {
  return (
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
};

export default CardInfo;
