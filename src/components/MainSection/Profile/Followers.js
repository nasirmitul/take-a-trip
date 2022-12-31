import React, { useContext, useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AuthContext } from '../../../contexts/UserContext';

const Followers = () => {

    const { user } = useContext(AuthContext)

    const [followers, setFollowers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/follower/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('followers', data);
                setFollowers(data)
            })
    }, [])

    return (
        <div className='followers'>
            {
                followers.length > 0 &&
                <div className="section-title followers-text d-flex">
                    <h6 className="section-heading">Followers</h6>
                    <small>{followers.length}</small>
                </div>
            }

            {
                followers.length <= 0 && <p className='no-recent-event'>You do not have any followers</p>
            }

            <div className="all-followers">

                {
                    followers.map(follower =>
                        <div className="follower">
                            <div className="follower-info">
                                <div className="follower-img">
                                    <img src={follower.followByImage} alt="" />
                                </div>
                                <div className="followers-text">
                                    <p className="followers-name">{follower.followByName}</p>
                                    <div className="follower-number">
                                        <small>{follower.followByEmail}</small>
                                        {/* <small>110 Following</small> */}
                                    </div>
                                </div>
                            </div>
                            <div className="follower-icon">
                                <BsThreeDots className='three-dot-icon'></BsThreeDots>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Followers;