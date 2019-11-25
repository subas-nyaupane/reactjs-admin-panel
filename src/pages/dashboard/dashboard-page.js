import Typography from '@material-ui/core/Typography';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import useStyles from './styles';

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/*<Header />*/}
      <Sidebar />
      <Typography
        component="div"
        style={{backgroundColor: '#f1f1f1', height: '100vh', width: '100%'}}
      />
    </Grid>
  );
}
