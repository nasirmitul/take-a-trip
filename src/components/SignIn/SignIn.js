import React, { useContext, useState } from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'

import show from '../../icons/show.svg'
import hide from '../../icons/hide.svg'

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignIn = () => {
    const [seePass, setSeePass] = useState(false)

    const { signIn, googleSign } = useContext(AuthContext);
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
                console.log('LoggedIn user: ', user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    /* Signup with Google */
    const handleGoogleSign = () => {
        googleSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
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
                                    <h1 className="signup-title">Sign in to <span>Take A Trip</span></h1>

                                    <p className="signin">Don't Have A Account? <Link to='/signup'>Signup.</Link></p>

                                    <input className="common email" type="email" name='email' placeholder="Email" required />

                                    <div className="password-input">
                                        <input className="common password" name="password" type={seePass ? 'text' : 'password'} placeholder="Password" required />

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

                                    <button className="submit-button" type="submit">Signin</button>
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