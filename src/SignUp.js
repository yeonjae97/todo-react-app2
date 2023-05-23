import React from 'react';
import { signup } from './service/ApiService';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {

  // 로그인 버튼 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");
    signup({username, password}).then(
      (resp) => (window.location.href="/login")
    );
  }



  return (
  <Container component="main" maxWidth="xs" style={{marginTop : "8%"}}>
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant='h5'>
            계정 생성
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField 
              variant='outlined'
              required
              fullWidth
              id="username"
              label="아이디"
              name="username"
              autoFocus
              autoComplete='fname'/>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              variant='outlined'
              required
              fullWidth
              id="password"
              label="패스워드"
              name="password"
              type="password"
              autoComplete='current-password'/>
          </Grid>
          <Grid item xs={12}>
            <Button
             type="submit"
             fullWidth
             variant='contained'
             color="primary">
              계정 생성
             </Button>
          </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/login" variant="body2">
            이미 계정이 있습니까? 로그인하세요.
          </Link>
        </Grid>
      </Grid>
      </form>
  </Container>);
};

export default SignUp;