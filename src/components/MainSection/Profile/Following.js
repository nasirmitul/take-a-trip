import React, { useContext, useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AuthContext } from '../../../contexts/UserContext';
import pic from '../../../images/man.jpg';

const Following = () => {

    const { user } = useContext(AuthContext)

    const [followings, setFollowings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/following/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('following', data);
                setFollowings(data)
            })
    }, [])

    return (
        <div className='followers'>
            {
                followings.length > 0 &&
                <div className="section-title followers-text d-flex">
                    <h6 className="section-heading">Following</h6>
                    <small>{followings.length}</small>
                </div>
            }

            {
                followings.length <= 0 && <p className='no-recent-event'>You are not following anyone yet</p>
            }


            <div className="all-followers">

                {
                    followings.map(following =>
                        <div className="follower">
                            <div className="follower-info">
                                <div className="follower-img">
                                    <img src={following.followingImage} alt="" />
                                </div>
                                <div className="followers-text">
                                    <p className="followers-name">{following.followingName}</p>
                                    <div className="follower-number">
                                        <small>{following.followingEmail}</small>
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

export default Following;