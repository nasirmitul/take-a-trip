import React, { useContext, useState } from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'

import show from '../../icons/show.svg'
import hide from '../../icons/hide.svg'

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { toast } from 'react-hot-toast';
const auth = getAuth();

const Signup = () => {
    const [seePass, setSeePass] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [passErrorMessage, setPassErrorMessage] = useState('');

    const { createUser, googleSign } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    /* Signup with Email Password */
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const email = form.email.value;
        const password = form.password.value;
        const gender = form.gender.value;

        if (name.length < 2) {
            setNameErrorMessage('Name should be at least 2 character long');
        }

        let avatar = '';
        if (gender === 'male') {
            avatar = "https://i.ibb.co/P1ZYLSv/male-avatar.png"
        }
        else if (gender === 'female') {
            avatar = "https://i.ibb.co/7g5tmc8/female-avatar.png"
        }
        else {
            avatar = "https://i.ibb.co/0hpn9NP/avatar.png"
        }

        console.log(name, email, password, gender);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: avatar
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });
                console.log('registered user: ', user);
                form.reset();
                navigate('/signin',
                    {
                        state:
                        {
                            message: "signup success",
                            email: email
                        }
                    }
                );

                const createUser = {
                    userID: user.uid,
                    name: name,
                    email: user.email,
                    profile: avatar,
                    time: new Date(),
                    gender,
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
                    
                emailVerify();
            })
            .catch(error => {
                console.log(error);
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setEmailErrorMessage('This email already in use. Please use another email');
                }

                if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setPassErrorMessage('Password should be al least 6 character long');
                }
            })
    }

    /* User Email Verification */
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => console.log('email verification sent'))
            .catch((error) => console.log(error))
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
                <Navigate to='/'></Navigate>
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

                                    <input onFocus={() => setEmailErrorMessage('')} className="common email" type="email" name="email" placeholder="Email" required />
                                    <p className='email-mistake'>{emailErrorMessage}</p>


                                    <input onFocus={() => setNameErrorMessage('')} className="common name" type="text" name="name" placeholder="Name" required />
                                    <p className='name-mistake'>{nameErrorMessage}</p>

                                    <div className="password-input">
                                        <input onFocus={() => setPassErrorMessage('')} className="common password" name="password" type={seePass ? 'text' : 'password'} placeholder="Password" required />
                                        <p className='password-mistake'>{passErrorMessage}</p>

                                        <div className="eye-icon" onClick={() => setSeePass(!seePass)}>

                                            {
                                                seePass ? <img className='hide-pass' src={hide} alt="" /> : <img className='show-pass' src={show} alt="" />
                                            }

                                        </div>
                                    </div>


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