import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import {TextField, Button, Box } from '@mui/material';

export default function Login({ setIsLogin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      localStorage.setItem("tokenStore", res.data.token);
      localStorage.setItem("getUser", user.email);
      setIsLogin(true);
      navigate("/products");
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };
  return (
    <div className="login">
      <h3 className="login-form-heading">Login</h3>
        <form
          className="login-form"
          onSubmit={loginSubmit}
        >
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <div className="mb-4">
            
            <TextField className="" id="email" label="Email" variant="outlined" name="email" autoFocus 
              placeholder="email"
              required
              value={user.email}
              onChange={onChangeInput} />
          </div>
          <div className="mb-6">
          
            <TextField className="" label="Password" variant="outlined" id="password" autoFocus 
              type="password"
              name="password"
              placeholder="******************"
              required
              value={user.password}
              onChange={onChangeInput} />
              <p className="text-red-500 text-xs italic">{err}</p>
          </div>
          </Box>
          <div className="flex items-center justify-between">
            <Button type="submit" variant="contained" color="success">Login</Button>
            <p>If you don't have account: <a href="/signup">Signup</a></p>
          </div>
        </form>
    </div>
  );
}
