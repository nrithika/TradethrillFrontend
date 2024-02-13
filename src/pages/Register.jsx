import React, { useState } from "react";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system";
import { Button } from "@mui/base";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    setData({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    })
  }


  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Typography variant="h3" gutterBottom>
        Create New Account
      </Typography>
      <Typography variant="h6" gutterBottom>
        Already Registered? <Link to="/">Login</Link>
      </Typography>
      <Box>
        <label htmlFor="name">
          <Typography variant="body1" color="initial">Name : </Typography>
        </label>
        <input type="text" name="name" id="name" placeholder="Enter your name"/>
      </Box>
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
        Register
      </button>
    </form>
  );
};

export default Register;
