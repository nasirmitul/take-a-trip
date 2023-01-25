import React, { useContext, useState } from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'

import show from '../../icons/show.svg'
import hide from '../../icons/hide.svg'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const SignIn = () => {
    /* getting data while navigation from forget pass to this component*/
    const { state } = useLocation();
    const { message, email } = state || {};

    /* Declaring states*/
    const [seePass, setSeePass] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passErrorMessage, setPassErrorMessage] = useState('');

    const { user, signIn, googleSign } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                if (user.emailVerified === false) {
                    setEmailErrorMessage("Your Email isn't verified");
                    return;
                }

                // get jwt token
                /* const currentUser = {
                    userEmail: user.email
                }
                console.log("currentUser", currentUser);

                fetch('https://take-a-trip-server-sigma.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("data", data);
                        // saving the token in local storage
                        localStorage.setItem('tripToken', data.token)
                        navigate('/');
                    }) */


                navigate('/');
                console.log('LoggedIn user: ', user.email);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setEmailErrorMessage('User not found');
                }

                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setPassErrorMessage('Wrong password. Please try again.');
                }
            })
    }

    /* Signup with Google */
    const handleGoogleSign = () => {
        googleSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
                const createUser = {
                    userID: user.uid,
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    time: new Date(),
                    gender: 'N/A',
                    role: 'user',
                    followers: [],
                    following: [],
                    tours: [],
                    interested: [],
                    bio: '',
                    facebook: '',
                    instagram: '',
                    twitter: ''
                }

                console.log(createUser);
                fetch('https://take-a-trip-server-sigma.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(createUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success("Account Created")
                        }
                    })
                    .catch(error => console.log(error))
                navigate('/');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                console.log(`errorcode: ${errorCode}, errorMessage: ${errorMessage}, email: ${email}`);
            });
    }

    return (
        <div>
            {
                message === 'forget success' ? <p className='alert-message'>An Email has sent in your <span className='email-id'>"{email}"</span> account. Go check it out and reset your password. Don't forget to check spam folder if you can't see the mail.</p> : ""
            }

            {
                message === 'signup success' ? <p className='alert-message'>A Verification Email has sent in your <span className='email-id'>"{email}"</span> account. Go check it out. Don't forget to check spam folder if you can't see the mail.</p> : ""
            }
            <div className="signup layer1">
                <div className="layer2">
                    <div className="sign-container">
                        <nav>
                            <a href="#">
                                <img className="logo" src={logo} alt="" />
                            </a>
                        </nav>

                        <div className="signup-main">
                            <div className="signup-left">
                                <img src={signup} alt="" />
                            </div>

                            <div className="signup-right">
                                <form action="#" onSubmit={handleSubmit}>
                                    <h1 className="signup-title">Log in to <span>Take A Trip</span></h1>

                                    <p className="signin">Don't Have an Account? <Link to='/signup'>Signup.</Link></p>

                                    <input onFocus={() => setEmailErrorMessage('')} className="common email" type="email" name="email" placeholder="Email" required />
                                    <p className='email-mistake'>{emailErrorMessage}</p>

                                    <div className="password-input">
                                        <input onFocus={() => setPassErrorMessage('')} className="common password" name="password" type={seePass ? 'text' : 'password'} placeholder="Password" required />
                                        <p className='password-mistake'>{passErrorMessage}</p>

                                        <div className="eye-icon" onClick={() => setSeePass(!seePass)}>

                                            {
                                                seePass ? <img className='hide-pass' src={hide} alt="" /> : <img className='show-pass' src={show} alt="" />
                                            }

                                        </div>
                                    </div>

                                    <div className="remember-forget">
                                        <div className="remember-me">
                                            <input type="checkbox" name="checkbox" id="checkbox_id" value="value" />
                                            <label htmlFor="checkbox_id">Remember Me</label>
                                        </div>
                                        <div className="forget-password">
                                            <Link to='/forget-password'>Forget Password?</Link>
                                        </div>
                                    </div>

                                    <button className="submit-button" type="submit">Login</button>
                                </form>
                                <button className="with-google" onClick={handleGoogleSign}>
                                    <i className="fa-brands fa-google"></i>
                                    <p>Signup With Google</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="layer3"></div>

            </div>
        </div>
    );
};

export default SignIn;