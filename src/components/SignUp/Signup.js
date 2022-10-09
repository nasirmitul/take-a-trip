import React from 'react';
import signup from '../../images/signup.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);


const Signup = () => {

    /* //Create references to the dropdown's
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    const months = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];

    //Months are always the same
    (function populateMonths() {
        for (let i = 0; i < months.length; i++) {
            const option = document.createElement('option');
            option.textContent = months[i];
            monthSelect.appendChild(option);
        }
        monthSelect.value = "January";
    })();

    let previousDay;

    function populateDays(month) {
        //Delete all of the children of the day dropdown
        //if they do exist
        while (daySelect.firstChild) {
            daySelect.removeChild(daySelect.firstChild);
        }
        //Holds the number of days in the month
        let dayNum;
        //Get the current year
        let year = yearSelect.value;

        if (month === 'January' || month === 'March' ||
            month === 'May' || month === 'July' || month === 'August'
            || month === 'October' || month === 'December') {
            dayNum = 31;
        } else if (month === 'April' || month === 'June'
            || month === 'September' || month === 'November') {
            dayNum = 30;
        } else {
            //Check for a leap year
            if (new Date(year, 1, 29).getMonth() === 1) {
                dayNum = 29;
            } else {
                dayNum = 28;
            }
        }
        //Insert the correct days into the day <select>
        for (let i = 1; i <= dayNum; i++) {
            const option = document.createElement("option");
            option.textContent = i;
            daySelect.appendChild(option);
        }
        if (previousDay) {
            daySelect.value = previousDay;
            if (daySelect.value === "") {
                daySelect.value = previousDay - 1;
            }
            if (daySelect.value === "") {
                daySelect.value = previousDay - 2;
            }
            if (daySelect.value === "") {
                daySelect.value = previousDay - 3;
            }
        }
    }

    function populateYears() {
        //Get the current year as a number
        let year = new Date().getFullYear();
        //Make the previous 100 years be an option
        for (let i = 0; i < 101; i++) {
            const option = document.createElement("option");
            option.textContent = year - i;
            yearSelect.appendChild(option);
        }
    }

    populateDays(monthSelect.value);
    populateYears();

    yearSelect.onchange = function () {
        populateDays(monthSelect.value);
    }
    monthSelect.onchange = function () {
        populateDays(monthSelect.value);
    }
    daySelect.onchange = function () {
        previousDay = daySelect.value;
    } */

    const provider = new GoogleAuthProvider();

    const handleGoogleSign = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(`errorCode: ${errorCode}, errorMessage: ${errorMessage}, email: ${email}, credential: ${credential}`)

            })
    }


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
                                    <h1 class="signup-title">Sign up to <span>Take A Trip</span></h1>

                                    <p class="signin">Already Have A Account? <Link to='/signin'>Sign In</Link></p>

                                    <input class="common email" type="email" placeholder="Email" required />
                                    <input class="common name" type="text" placeholder="Name" required />
                                    <input class="common password" type="password" placeholder="Password" required />
                                    <div class="dob">
                                        <span>
                                            <select class="day" name="day" id="day" required></select>
                                        </span>
                                        <span>
                                            <select class="month" name="month" id="month" required></select>
                                        </span>
                                        <span>
                                            <select class="year" name="year" id="year" required></select>
                                        </span>
                                    </div>

                                    <div class="gender">
                                        <div class="items">
                                            <label for="male" class="item male">
                                                <span>Male</span>
                                                <input type="radio" name="select" value="male" id="male" required />
                                            </label>
                                            <label for="female" class="item female">
                                                <span>Female</span>
                                                <input type="radio" name="select" value="female" id="female" required />
                                            </label>
                                            <label for="other" class="item other">
                                                <span>Other</span>
                                                <input type="radio" name="select" value="other" id="other" required />
                                            </label>
                                        </div>
                                    </div>

                                    <button class="submit-button" type="submit">Signup</button>


                                </form>
                                <button class="with-google" onClick={handleGoogleSign}>
                                    <i><i class="fa-brands fa-google"></i></i>
                                    <p>Signup With Google</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="layer3"></div>

            </div>
        </div>


    );
};

export default Signup;