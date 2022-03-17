import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { register } from '../services/userapi';

export default function Register() {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = data;
    const changehandler = function (e) {
        const { name, value } = e.target;
        setData(state => ({ ...state, [name]: value }));
    }
    const clickhandler = async function (e) {
        console.log(data);
        register(data);
    }
    return (
        <Grid container spacing={2} centered>
            <Grid item xs={12} md={6} lg={4}>
                <TextField label="Enter Your Name" name="name" value={name} onChange={changehandler} variant="standard" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField label="Enter Your Email" name="email" value={email} onChange={changehandler} variant="standard" sx={{ width: "250px", backgroundColor: "yellow" }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField label="Enter Your password" name="password" value={password} onChange={changehandler} variant="standard" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <Button variant="outlined" onClick={clickhandler} >Register Me</Button>
            </Grid>
        </Grid>

    )
}
