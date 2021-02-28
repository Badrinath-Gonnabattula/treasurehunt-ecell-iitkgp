import React, { useState } from 'react';
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
import {Redirect} from 'react-router';
import Alert from '@material-ui/lab/Alert';

const axios = require('axios');

export default function SignInForm(props) {
  // const classes = useStyles();

  const [userinfo,setUserinfo] = useState({"name":'',"email":'',"password":'',"loggedin":false,"details":null});

  const handlename = (e) => {
    setUserinfo({...userinfo,"name":e.target.value});
  }

  const handleemail = (e) => {
    setUserinfo({...userinfo,"email":e.target.value});
  }

  const handlepassword = (e) => {
    setUserinfo({...userinfo,"password":e.target.value});
  }

  const handlelogin = (e) => {
    e.preventDefault();
    console.log(userinfo);
    axios.post('https://node.ecell-iitkgp.org/hunt/login',{"email":userinfo.email,"password":userinfo.password})
      .then((response) => {
        setUserinfo({...userinfo,"loggedin":response.data.success,"details":response.data.details});
        console.log(userinfo);
        console.log(response.data);
        if(response.data.success){
          console.log("sad");
          props.onlog();
        }
        else{
          console.log("err");
          const alertWindow = document.getElementsByClassName('WA')[0];
          // console.log(alertWindow);
          alertWindow.style.display = 'block';
          document.getElementsByTagName('a')[0].style.marginTop = '20px';

          setTimeout(()=>{
            alertWindow.style.display = 'none';
            var aTag = document.getElementsByTagName('a')[0];
            if(aTag){
              aTag.style.marginTop = '40px';
            }
          },4500);
        }
      })
      .catch((error) => {
      })
  }

  return (
    <div class="login-box">
      <h2>Login</h2>
      <form action="">
        <div class="user-box">
          <input type="text" name="" required="" onChange={handlename} value={userinfo.name}></input>
          
          <label>Name</label>
        </div>

        <div class="user-box">
          <input type="text" onChange={handleemail} value={userinfo.email}></input>
          <label for="">Email</label>
        </div>
        <div class="user-box">
          <input type="password" onChange={handlepassword} value={userinfo.password}></input>
          <label for="">Password</label>
        </div>
        <div className='WA'>
            <Alert severity="error" style={{marginBottom:0}}>
              User not found!
            </Alert>
        </div>
        <a href="" onClick={handlelogin}>
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