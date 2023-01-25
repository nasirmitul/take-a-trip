import React, { useContext, useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import pic from '../../../images/man.jpg';

const Following = () => {

    const { user } = useContext(AuthContext)

    const [followings, setFollowings] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/following/${user.email}`)
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
                        <div key={following.followingEmail} className="follower">
                            <div className="follower-info">
                                <div className="follower-img">
                                    <Link to={`${user?.email === following.followingEmail ? `/profile/timeline` : `/user/${following.followingEmail}`}`}>
                                        <img src={following.followingImage} alt="" />
                                    </Link>

                                </div>
                                <div className="followers-text">
                                    <Link to={`${user?.email === following.followingEmail ? `/profile/timeline` : `/user/${following.followingEmail}`}`}>
                                        <p className="followers-name">{following.followingName}</p>
                                    </Link>
                                    <div className="follower-number">
                                        <small>{following.followingEmail}</small>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="follower-icon">
                                <BsThreeDots className='three-dot-icon'></BsThreeDots>
                            </div> */}
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Following;