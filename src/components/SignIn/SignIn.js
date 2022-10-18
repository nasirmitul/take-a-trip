import React, { useContext } from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignIn = () => {

    const { signIn,  } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
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
            navigate('./');
        })
        .catch(error => {
            console.log(error);
        })
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

                                    <input className="common password" type="password" name='password' placeholder="Password" required />

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

                                    <a href="#" className="with-google">
                                        <i><i className="fa-brands fa-google"></i></i>
                                        <p>Signin With Google</p>
                                    </a>
                                </form>
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