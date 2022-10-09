import React from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div class="signup layer1">
                <div class="layer2">
                    <div class="sign-container">
                        <nav>
                            <a href="#">
                                <img class="logo" src={logo} alt="" />
                            </a>
                        </nav>

                        <div class="signup-main">
                            <div class="signup-left">
                                <img src={signup} alt="" />
                            </div>

                            <div class="signup-right">
                                <form action="#">
                                    <h1 class="signup-title">Sign in to <span>Take A Trip</span></h1>

                                    <p class="signin">Don't Have A Account? <Link to='/signup'>Signup.</Link></p>

                                    <input class="common email" type="email" placeholder="Email" required />

                                    <input class="common password" type="password" placeholder="Password" required />

                                    <div class="remember-forget">
                                        <div class="remember-me">
                                            <input type="checkbox" name="checkbox" id="checkbox_id" value="value" />
                                            <label for="checkbox_id">Remember Me</label>
                                        </div>
                                        <div class="forget-password">
                                            <Link to='/forget-password'>Forget Password?</Link>
                                        </div>
                                    </div>


                                    <button class="submit-button" type="submit">Signin</button>

                                    <a href="#" class="with-google">
                                        <i><i class="fa-brands fa-google"></i></i>
                                        <p>Signin With Google</p>
                                    </a>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="layer3"></div>

            </div>
        </div>
    );
};

export default SignIn;