import React, { useState } from 'react';
import '../../../css/style.css'

import man from '../../../images/man.jpg'

import notification from '../../../icons/notification.png'
/* import globe from '../../../images/t.png'
import travel from '../../../images/space-travel.jpg'
import menu from '../../../icons/menu.png'
import react from '../../../icons/react.png'
import comment from '../../../icons/comment.png'
import interested from '../../../icons/interested.png'
import going from '../../../icons/going.png'
import moreInfo from '../../../icons/more info.png' */
import SingleUserPost from './SingleUserPost';
import SingleAgencyPost from './SingleAgencyPost';
import Modal from '../../Modal/Modal';
import { useLoaderData } from 'react-router-dom';
import Notifications from '../../Notifications/Notifications';

const Home = () => {

    const [openModal, setOpenModal] = useState(false);
    const [notifications, setNotifications] = useState(false);

    const posts = useLoaderData();

    return (

        <div>
            <section id="middle-section" className="middle-section">

                <div className="search-notification">
                    <div className="search-bar">
                        <input className='search' type="text" name="" id="" placeholder='search' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="notification-icon-popup">
                        <div className="notification-icon" onClick={() => setNotifications(!notifications)}>
                            <img src={notification} alt="" />
                        </div>
                        <div className="show-notification">
                            {notifications && <Notifications></Notifications>}
                        </div>
                    </div>


                </div>




                <div className="make_post d-flex">
                    <div className='w-100 update-post' onClick={() => setOpenModal(true)}>
                        <img className="img-fluid user-profile-img" src={man} alt="" />
                        <p>How was your recent tour?</p>
                    </div>

                    <div className='post-modal'>
                        {openModal && <Modal closeModal={setOpenModal} />}
                    </div>


                </div>
                {
                    posts.map(post => <SingleUserPost
                        key={posts.id}
                        post={post}
                    ></SingleUserPost>)
                }
                {/* <SingleUserPost posts={posts}></SingleUserPost> */}
                <SingleAgencyPost></SingleAgencyPost>

            </section>
        </div>
    );
};

export default Home;