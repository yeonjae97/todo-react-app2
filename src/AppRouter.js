import { Box, Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import App from './App';
import SignUp from './SignUp';
import SocialLogin from './SocialLogin';

function Copyright(){
  return(
    <Typography variant='body2' color="textSecondary" align='center'>
      Copyright &copy; tj academy {new Date().getFullYear()}
    </Typography>
  )
}

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="socialLogin" element={<SocialLogin />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

export default AppRouter;