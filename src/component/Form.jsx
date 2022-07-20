import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Form() {

  const activedInput = useRef();
  const nameInput = useRef();
  const passInput = useRef();







  const handleSubmit = (event) => {
    event.preventDefault();
    const formInfo = new FormData()
    formInfo.append('alias', nameInput.current.value);
    formInfo.append('pass', nameInput.current.value);

    formInfo.append('actived', activedInput.current.value);



    //const data = new FormData(event.currentTarget);
    
    //const newData = ({
    //  alias: data.get('alias'),
   //   pass: data.get('password'),
   //   actived: 1
    //});
    //console.log(newData)

    /*let formInfo = new FormData();
    formInfo.append('alias', data.get('alias'));
    formInfo.append('pass', data.get('password'));
    formInfo.append('actived', 1);*/
    // console.log(formInfo);

    let settings = {
      "method": "POST",
       //"headers": {
        //"Content-Type": "application/json",
         //"Accept": "application/json"
       //},
      "body": formInfo
    }

    // fetch("http://localhost:3001/api/products/store", settings)
    fetch("http://localhost:3001/api/users/", settings)
      .then(response => response.json())
      .then(info => {
  
         console.log(info);
        
      })

  };


  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="alias"
              label="Email Address"
              name="alias"
              autoComplete="alias"
              autoFocus
            />
            <input type="text" name="actived" ref={activedInput} placeholder="actived" />
            <input type="text" name="name" ref={nameInput}/>
            <input type="text" name="name" ref={passInput}/>
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}