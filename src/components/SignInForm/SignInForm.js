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

const axios = require('axios');

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));



export default function SignInForm() {
  // const classes = useStyles();

  const [userinfo,setUserinfo] = useState({"name":'',"email":'',"loggedin":false});
  
  const handleemail = (e) => {
    setUserinfo({...userinfo,"email":e.target.value});
  }

  const handlename = (e) => {
    setUserinfo({...userinfo,"name":e.target.value});
  }

  const handlelogin = (e) => {
    e.preventDefault();
    console.log(userinfo);
    async function checkuser(){
      try {
        const response = await axios.post('https://node.ecell-iitkgp.org/hunt/login',userinfo);
        setUserinfo({...userinfo,"loggedin":response.data.success});
        console.log(userinfo);

      }
      catch(error){
        console.log(error);
      }
    }
    checkuser();
    setUserinfo({"name":'',"email":'',"loggedin":false});
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
        <a href="" onClick={handlelogin} >
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