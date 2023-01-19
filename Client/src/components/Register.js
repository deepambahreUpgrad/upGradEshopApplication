import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {TextField, Button, Box } from '@mui/material';

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      navigate("/");
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };
  return (
    <div className="sigup">
       <h3 className="sigup-form-heading">Signup</h3>
        <form
          className="sigup-form"
          onSubmit={registerSubmit}
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
<TextField className="" label="Username" variant="outlined" autoFocus 
              id="username"
              type="text"
              name="name"
              placeholder="username"
              required="true"
              value={user.name}
              onChange={onChangeInput} />

          </div>
          <div className="mb-4">
            <TextField className="" id="email" label="Email" variant="outlined" name="email" autoFocus 
              placeholder="email"
              required="true"
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
            <Button type="submit" variant="contained" color="success">Signup</Button>
            <p>If you already have account: <a href="/">Login</a></p>
          </div>
        </form>
    </div>
  );
}
