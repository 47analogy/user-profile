import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.paper} variant="h3" gutterBottom>
        CTA-TITLE
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {' '}
            <Card>
              <img src="https://via.placeholder.com/300x300" alt="1" />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {' '}
            <Card>
              <img src="https://via.placeholder.com/300x300" alt="1" />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {' '}
            <Card>
              <img src="https://via.placeholder.com/300x300" alt="1" />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {' '}
            <Card>
              <img src="https://via.placeholder.com/300x300" alt="1" />
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CallToAction;
