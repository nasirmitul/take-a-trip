import React from 'react';
import man from '../../images/man.jpg'

const Notification = () => {
    return (
        <div>
            <div className="notification d-flex">
                <div className="img">
                    <img className="img-fluid user-profile-img" src={man} alt="" />
                </div>
                <div className="text">
                    <h5>Sheikh Monsur Tour Agency</h5>
                    <p>Your Payment is successfully done</p>
                </div>
            </div>
        </div>
    );
};

export default Notification;