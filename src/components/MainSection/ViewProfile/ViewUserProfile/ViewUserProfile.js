import React, { useContext, useEffect, useState } from 'react';
import cover from '../../../../images/nature.jpg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SingleUserPost from '../../Home/SingleUserPost';
import { AuthContext } from '../../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const ViewUserProfile = () => {
    const [userProfile, setUserProfile] = useState([])
    const [posts, setPost] = useState([])
    const [followings, setFollowings] = useState([]);
    const [follow, setFollow] = useState(false);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const location = useLocation();
    const userEmail = location.pathname;
    const emailLength = location.pathname.length;
    const email = userEmail.slice(6, emailLength)

    window.scrollTo(0, 0);

    if (user.email === email) {
        navigate('/profile/timeline')
    }

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log('user data', data)
                setUserProfile(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/posts/${email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/following/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('following data', data);
                setFollowings(data)
            })
    }, [])

    useEffect(() => {
        followings.forEach(following => {
            if (following.followingEmail === email) {
                setFollow(true);
                console.log(follow);
            }
        })
    }, [followings])


    const handleAddFollow = () => {
        setFollow(true)

        const follower = {
            followByEmail: user.email,
            followByName: user.displayName,
            followByImage: user.photoURL,
            byFollowEmail: email,
            byFollowName: userProfile.name,
            byFollowImage: userProfile.profile,
            followTime: new Date()
        }


        fetch(`https://take-a-trip-server-sigma.vercel.app/follow/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(follower)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('follwed')
            })
    }


    const handleAddUnFollow = () => {
        setFollow(false)

        const unfollow = {
            followByEmail: user.email,
            byFollowEmail: email,
        }

        fetch(`https://take-a-trip-server-sigma.vercel.app/unfollow/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(unfollow)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.error('unfollowed')
            })
    }
    

    return (

        <div className='user-profile'>
            <div className="profile-header">
                <div className="cover-image">
                    <img className='user-cover-image' src={cover} alt="" />
                </div>

                <div className="profile-image-others">
                    <div className="profile-image">
                        <img src={userProfile?.profile} alt="" />
                    </div>

                    <div className="profile-others">
                        <div className="profile-name-follow">
                            <div className="profile-name-email">
                                <h2 className="profile-name">{userProfile?.name}</h2>
                                <p className="profile-email">{userProfile?.email}</p>
                            </div>

                            {
                                follow ?
                                    <div className="follow-button">
                                        <button className="custom-btn unfollow" onClick={handleAddUnFollow}>UnFollow</button>
                                    </div> :
                                    <div className="follow-button">
                                        <button className="custom-btn" onClick={handleAddFollow}>Follow</button>
                                    </div>
                            }

                        </div>
                        <div className="profile-navigation profile-navigation-top">
                            <div className="navigation-links">
                                <NavLink to={`/user/${email}`}>Timeline</NavLink>
                                <NavLink to={`/user/${email}/about`}>About</NavLink>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <div className="profile-navigation profile-navigation-bottom">
                    <div className="navigation-links">
                        <NavLink to={`/user/${email}/timeline`}>Timeline</NavLink>
                        <NavLink to={`/user/${email}/about`}>About</NavLink>
                    </div>
                </div> */}

            </div>

            {
                posts.length <= 0 && <p className='no-recent-event'>This user didn't post anything yet</p>
            }

            <div>
                {
                    Array.isArray(posts) && posts?.map(post => <SingleUserPost
                        key={post._id}
                        post={post}
                    ></SingleUserPost>)
                }
            </div>
        </div>
    );
};

export default ViewUserProfile;