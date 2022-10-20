import React, { useContext, useState } from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const ForgetPass = () => {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const { handleForgetPass } = useContext(AuthContext)
    const navigate = useNavigate();


    const forgetPassword = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        handleForgetPass(email)
            .then(() => {
                console.log('reset password mail sent')
                event.target.reset();
                navigate('/signin',
                    {
                        state:
                        {
                            message: "forget success",
                            email : email
                        }
                    }
                );
            })
            .catch((error) => {
                console.log(error)

                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setEmailErrorMessage('User not found.');
                }
            })

    }

    return (
        <div>
            <div className="signup layer1">
                <div className="layer2">
                    <div className="sign-container">
                        <nav>
                            <a href='#'>
                                <img className="logo" src={logo} alt="" />
                            </a>
                        </nav>

                        <div className="signup-main">
                            <div className="signup-left">
                                <img src={signup} alt="" />
                            </div>

                            <div className="signup-right">
                                <form action="#" onSubmit={forgetPassword}>
                                    <h1 className="signup-title forget-title">Forget your Password? <br /><span className="no-worry">No worry.</span></h1>

                                    <p className="signin">Put your Email below</p>

                                    <input onFocus={() => setEmailErrorMessage('')} className="common email" type="email" name="email" placeholder="Email" required />
                                    <p className='email-mistake'>{emailErrorMessage}</p>

                                    <button className="submit-button" type="submit">Recover Password</button>

                                    <p className="go-back">Go back and <Link to='/signin'>Signin</Link> </p>
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

export default ForgetPass;