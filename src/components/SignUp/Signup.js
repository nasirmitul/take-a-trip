import React, { useContext } from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

const Signup = () => {
    const { user, createUser, googleSign, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    /* Signup with Email Password */
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        
        const email = form.email.value;
        const password = form.password.value;
        const gender = form.gender.value;

        console.log(name, email, password, gender);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });
                console.log('registered user: ', user);
                form.reset();
                navigate('/signin');
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
                                    <h1 className="signup-title">Sign up to <span>Take A Trip</span></h1>

                                    <p className="signin">Already Have A Account? <Link to='/signin'>Sign In</Link></p>

                                    <input className="common email" type="email" name="email" placeholder="Email" required />
                                    <input className="common name" type="text" name="name" placeholder="Name" required />
                                    <input className="common password" name="password" type="password" placeholder="Password" required />


                                    <div className="gender">
                                        <div className="items">
                                            <label htmlFor="male" className="item male">
                                                <span>Male</span>
                                                <input type="radio" name="gender" value="male" id="male" required />
                                            </label>
                                            <label htmlFor="female" className="item female">
                                                <span>Female</span>
                                                <input type="radio" name="gender" value="female" id="female" required />
                                            </label>
                                            <label htmlFor="other" className="item other">
                                                <span>Other</span>
                                                <input type="radio" name="gender" value="other" id="other" required />
                                            </label>
                                        </div>
                                    </div>

                                    <p className='error-message'></p>

                                    <button className="submit-button" type="submit">Signup</button>


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

export default Signup;