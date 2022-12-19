import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import jwt from "jsonwebtoken";
import { Redirect } from 'react-router-dom';
import { authLogin } from '../../api/authApi';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SigninPage(props) {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submitLogin = () => {
        // validate
        if (username === "") {
            setErr("Hãy nhập email");
            console.log(err);
            return;
        }
        if (password === "") {
            setErr("Hãy nhập mật khẩu");
            return;
        }
        setErr("");
        // submit
        let data = {
            email: username,
            password
        };
        authLogin(data)
            .then((res) => {
                if (res.status === 200 && typeof res.data.errorCode !== 'undefined') {
                    if (res.data.errorCode == 0) {
                        const payload = jwt.decode(res.data.data);
                        localStorage.setItem("user_token", res.data.data);
                        // get data payload
                        localStorage.setItem("user_id", payload.id);
                        localStorage.setItem("user_type", payload.account_type);
                        setRedirect(true);
                    } else {
                        setErr(res.data.message);
                    }
                } else {
                    setErr("Tài khoản hoặc mật khẩu không chính xác!");
                }
            })
            .catch((error) => {
                setErr("Tài khoản hoặc mật khẩu không chính xác!");
                console.log("Error: ", error);
            });
    }

    useEffect(() => {
        let token = localStorage.getItem("user_token");
        if (token) {
            setRedirect(true);
        }
    }, [])

    return (
        <React.Fragment>
            {redirect
                ? <Redirect to="/" />
                :
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {err && (
                            <div className="errorMsg" style={{ color: 'red', float: 'left' }}>{err}</div>
                        )}
                        <form className={classes.form} noValidate>
                            <div className="mt-3">
                                <input type="text" className="custom-input" placeholder="username" onChange={e => setUsername(e.target.value)} />
                            </div>

                            <div className="mt-3">
                                <input type="password" className="custom-input" placeholder="password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={submitLogin}
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container className="mb-4">
                                <Grid item xs>
                                    <Link href="/forgot-password" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            }
        </React.Fragment>
    )
}