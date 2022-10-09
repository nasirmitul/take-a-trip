import React from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';


const ForgetPass = () => {
    return (
        <div>
            <div class="signup layer1">
                <div class="layer2">
                    <div class="sign-container">
                        <nav>
                            <a href='#'>
                                <img class="logo" src={logo} alt="" />
                            </a>
                        </nav>

                        <div class="signup-main">
                            <div class="signup-left">
                                <img src={signup} alt="" />
                            </div>

                            <div class="signup-right">
                                <form action="#">
                                    <h1 class="signup-title forget-title">Forget your Password? <br/><span class="no-worry">No worry.</span></h1>

                                    <p class="signin">Put your Email below</p>

                                    <input class="common email" type="email" placeholder="Email" required />

                                    <button class="submit-button" type="submit">Recover Password</button>

                                    <p class="go-back">Go back and <Link to='/signin'>Singin</Link> </p>
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

export default ForgetPass;