import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  background: {
    backgroundColor: 'blue',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <div>User Profiles</div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container>
            <Grid style={{ justifyContent: 'center' }} item xs={12} />
            <Grid style={{ justifyContent: 'flex-end' }} item xs={6} />
            <Grid item xs={6} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ul style={{ listStyle: 'none', margin: 0 }}>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subheading" component="span">
          @ 2020 All right reserved
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
