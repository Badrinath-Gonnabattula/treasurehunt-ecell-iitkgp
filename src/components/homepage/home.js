import React from 'react';
import {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './home.css';

import PlaynowCard from './playnowcard.js'
import RulesCard from './RulesCard.js';
import ResultsCard from './ResultsCard'
import { Typography } from '@material-ui/core';
import SignInForm from '../SignInForm/SignInForm'

import playimage from './playimg.png';

import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close:{
    float:'right',
    zIndex:1000,
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
  }
}));

export default function Home() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log('opened')
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='home-container'>
      
      <Grid container className={classes.root} direction='column' spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            <div className='heading-main'>
              <h1>Tressure Hunt</h1>
            </div>
          </Grid>
          <Grid container justify="center" spacing={0} className='cards-container'>
            <div><RulesCard /></div>
            <div onClick={handleOpen}><PlaynowCard /></div>
            <div><ResultsCard /></div>
          </Grid>
          <Grid container justify="center" spacing={0}>
            <h6 className='subtitle'>
              <i>POWERED BY - ENTREPRENUERSHIP CELL,IIT KHARAGPUR</i>
            </h6>
          </Grid>
        </Grid> 
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableBackdropClick='true'
        BackdropProps={{
          timeout: 2000,
        }}
      >
        <Fade in={open}>
          <div className='paper'>
            <IconButton aria-label="delete" className={classes.close} size="large">
              <CancelIcon fontSize="large" onClick={()=>setOpen(!open)}/>
            </IconButton>
            <SignInForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
