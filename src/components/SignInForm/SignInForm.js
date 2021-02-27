import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './SignInForm.css';



export default function SignInForm() {
  // const classes = useStyles();

  return (
    <div class="login-box">
      <h2>Login</h2>
      <form action="">
        <div class="user-box">
          <input type="text" name="" required=""></input>
          
          <label>Name</label>
        </div>

        <div class="user-box">
          <input type="text"></input>
          <label for="">Email</label>
        </div>
        <div class="user-box">
          <input type="password"></input>
          <label for="">Password</label>
        </div>
        <a href="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SIGN IN
        </a>
      </form>
  </div>
  );
}