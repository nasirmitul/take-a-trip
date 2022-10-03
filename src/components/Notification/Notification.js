import React from 'react';
import '../../css/style.css'

import man from '../../images/man.jpg'

const Notification = () => {
    return (
        <div>
            <section id="notification-part">
                <div className="notifications">
                    <h3>Notifications</h3>
                    <hr />
                </div>

                <div className="notification d-flex">
                    <div className="img">
                        <img className="img-fluid user-profile-img" src={man} alt="" />
                    </div>
                    <div className="text">
                        <h5>Sheikh Monsur Tour Agency</h5>
                        <p>Your Payment is successfully done</p>
                    </div>
                </div>

                <div className="notification d-flex">
                    <div className="img">
                        <img className="img-fluid user-profile-img" src={man} alt="" />
                    </div>
                    <div className="text">
                        <h5>Sheikh Monsur Tour Agency</h5>
                        <p>Your Payment is successfully done</p>
                    </div>
                </div>

                <div className="notification d-flex">
                    <div className="img">
                        <img className="img-fluid user-profile-img" src={man} alt="" />
                    </div>
                    <div className="text">
                        <h5>Sheikh Monsur Tour Agency</h5>
                        <p>Your Payment is successfully done</p>
                    </div>
                </div>

                <div className="notification d-flex">
                    <div className="img">
                        <img className="img-fluid user-profile-img" src={man} alt="" />
                    </div>
                    <div className="text">
                        <h5>Sheikh Monsur Tour Agency</h5>
                        <p>Your Payment is successfully done</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Notification;