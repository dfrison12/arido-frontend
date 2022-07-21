import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFetchUsers } from '../hooks/useFetchUsers';


export default function Form() {
  const [ aliaserror, setAliaserror ] = useState(false);
  const [ errorMsAlias, setErrorMsAlias ] = useState("");
  const [ passError, setPassError ] = useState(false);
  const [ errorMsPass, seterrorMsPass ] = useState("");
 
  const { create } = useFetchUsers( );
  

  const theme = createTheme();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    const formData = {
      alias: data.get('alias'),
      pass: data.get('password')
    };
    let errors = [];

    if( formData.alias == "" ){
      setAliaserror(true);
      setErrorMsAlias("alias required");
      errors.push("errorAlias")
    }else if( formData.alias.length < 4 ){
      setAliaserror(true);
      setErrorMsAlias("income 4 characters minimum");
      errors.push("errorAlias")
    }else if( formData.alias.length >= 50 ){
    setAliaserror(true);
    setErrorMsAlias("income 20 characters maximum");
    errors.push("errorAlias")
    }

    if( formData.pass == "" ){
      setPassError(true);
      seterrorMsPass("password required");
      errors.push("errorPassword")
    }else if( formData.alias.length < 4){ 
      setPassError(true);
      seterrorMsPass("income 4 characters minimum");
      errors.push("errorPassword")
    }

    if (errors.length > 0 ){
      alert("Error")
      event.preventDefault();
    }else{
      create(formData)
      confirm('Succes')
      location.reload()
    }
  }

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            REGISTER NEW USER
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="alias"
              label="alias"
              name="alias"
              autoComplete="alias"
              error={aliaserror}
              helperText={errorMsAlias}

            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passError}
              helperText={errorMsPass}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
  
}