import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUser } from '../../api/userApi';

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignupPage = React.forwardRef(() => {
    const classes = useStyles();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // state
    const [errMsg, setErrMsg] = useState('');

    const userName = register("username", {
        required: 'Username is required!',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
        }
    });

    const onSubmit = async (formValues) => {
        // validate
        if (formValues.password !== formValues.confirm_password) {
            setErrMsg('Password and confirm password does not match!');
            return;
        } else {
            setErrMsg('');
        }

        // submit
        let data = {
            email: formValues.username,
            password: formValues.password,
            phone: formValues.phone ? formValues.phone : "0985123123",
            avatar: "https://o.vdoc.vn/data/image/2021/12/25/anh-luffy-cuoi.png", // hard link
            full_name: formValues.first_name + " " + formValues.last_name,
        };

        await createUser(data)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    toast.success('Create success!')
                    reset();
                }
                if (res.status === 409) {
                    toast.error('Username exist!')
                }
            })
            .catch((err) => {
                toast.error('Create fail!')
            })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {errors.first_name &&
                                <span style={{ color: 'red' }}>{errors.first_name.message}</span>
                            }
                            <input type="text" className="custom-input" placeholder="Enter first name"
                                {...register("first_name", {
                                    required: 'First name is required!',
                                    maxLength: {
                                        value: 30,
                                        message: 'First name is maximum 30 characters!'
                                    }
                                })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            {errors.last_name &&
                                <span style={{ color: 'red' }}>{errors.last_name.message}</span>
                            }
                            <input type="text" className="custom-input" placeholder="Enter last name"
                                {...register("last_name", {
                                    required: 'Last name is required!',
                                    maxLength: {
                                        value: 30,
                                        message: 'Last name is maximum 30 characters!'
                                    }
                                })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {errors.username &&
                                <span style={{ color: 'red' }}>{errors.username.message}</span>
                            }
                            <input type="text" className="custom-input" placeholder="Enter email" {...userName} />
                        </Grid>

                        <Grid item xs={12}>
                            {errors.phone &&
                                <span style={{ color: 'red' }}>{errors.phone.message}</span>
                            }
                            <input type="text" className="custom-input" placeholder="Enter phone number"
                                {...register("phone", {
                                    required: 'Phone is required!'
                                })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {errors.password &&
                                <span style={{ color: 'red' }}>{errors.password.message}</span>
                            }
                            <input type="password" className="custom-input" placeholder="Enter password"
                                {...register("password", {
                                    required: 'Password is required!',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters!'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Password maximum 30 characters!'
                                    }
                                })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {errMsg !== ''
                                ? <span style={{ color: 'red' }}>{errMsg}</span>
                                : null
                            }
                            {errors.confirm_password &&
                                <span style={{ color: 'red' }}>{errors.confirm_password.message}</span>
                            }
                            <input type="password" className="custom-input" placeholder="Enter confirm password"
                                {...register("confirm_password", {
                                    required: 'Confirm password is required!',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters!'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Password maximum 30 characters!'
                                    }
                                })}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end" className="mb-4">
                        <Grid item>
                            <Link href="/log-in" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </Container>
    );
})

export default SignupPage;