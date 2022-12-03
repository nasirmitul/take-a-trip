import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import '../../../css/style.css'

import notification from '../../../icons/notification.png'
import SingleUserPost from './SingleUserPost';
import SingleAgencyPost from './SingleAgencyPost';
import Modal from '../../Modal/Modal';
import { useLoaderData } from 'react-router-dom';
import Notifications from '../../Notifications/Notifications';
import { AuthContext } from '../../../contexts/UserContext';

const Home = () => {

    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [notifications, setNotifications] = useState(false);

    // const posts = useLoaderData();

    /* const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    }) */
    
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data)
        })
    }, [])

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
                        <img className="img-fluid user-profile-img" src={user.photoURL} alt="" />
                        <p>How was your recent tour?</p>
                    </div>

                    <div className='post-modal'>
                        {openModal && <Modal closeModal={setOpenModal} />}
                    </div>

                </div>

                {
                    Array.isArray(posts) && posts?.map(post => <SingleUserPost
                        key={post._id}
                        post={post}
                    ></SingleUserPost>)
                }

                <SingleAgencyPost></SingleAgencyPost>

            </section>
        </div>
    );
};

export default Home;