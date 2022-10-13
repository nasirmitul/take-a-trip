import React from 'react';
import man from '../../images/man.jpg'

const Notification = () => {
    return (
        <div>
            {/* <div className="notification d-flex">
                <div className="img">
                    <img className="img-fluid user-profile-img" src={man} alt="" />
                </div>
                <div className="text">
                    <h5>Sheikh Monsur Tour Agency</h5>
                    <p>Your Payment is successfully done</p>
                </div>
            </div> */}
            <div className="single-notification">
                <div className="img">
                    <img className='notification-img' src={man} alt="" />
                </div>
                <div className="notification-info">
                    <h5 className='user'>Hasan Mahbub</h5>
                    <p className='main-notification'>Your Payment is successfully done</p>
                    <p className='notification-time'>12:03pm, june 17,2022</p>
                </div>
            </div>
        </div>
    );
};

export default Notification;