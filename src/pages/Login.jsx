import React, { useState } from "react";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system";
import { Button } from "@mui/base";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    setData({
      email: e.target.email.value,
      password: e.target.password.value
    })
  }

  


  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>
      <Typography variant="h6" gutterBottom>
        Don't have an account? <Link to="/register">SignUp</Link>
      </Typography>
      <Box>
        <label htmlFor="email">
          <Typography variant="body1" color="initial">Email : </Typography>
        </label>
        <input type="email" name="email" id="email" placeholder="Enter your email"/>
      </Box>
      <Box>
        <label htmlFor="password">
          <Typography variant="body1" color="initial">Password : </Typography>
        </label>
        <input type="text" name="password" id="password" placeholder="Password"/>
      </Box>
      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
