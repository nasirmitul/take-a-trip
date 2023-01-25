import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import SingleAgencyPost from '../../Home/SingleAgencyPost';

const ViewAgencyProfile = () => {
    const agencyProfileData = useLoaderData();

    const { _id, agencyCover, agencyProfile, agencyName, agencyEmail } = agencyProfileData;

    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency/${agencyEmail}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <div className='user-profile'>
                <div className="profile-header">
                    <div className="cover-image">
                        <img className='user-cover-image' src={agencyCover} alt="" />
                    </div>

                    <div className="profile-image-others">
                        <div className="profile-image">
                            <img src={agencyProfile} alt="" />
                        </div>

                        <div className="profile-others">
                            <div className="profile-name-follow">
                                <div className="profile-name-email">
                                    <h2 className="profile-name">{agencyName}</h2>
                                    <p className="profile-email">{agencyEmail}</p>
                                </div>

                            </div>
                            <div className="profile-navigation profile-navigation-top">
                                <div className="navigation-links">
                                    <NavLink to={`/agencyProfile/${_id}`}>Timeline</NavLink>
                                    <NavLink to={`/agencyProfile/${_id}/about`}>About</NavLink>
                                    <NavLink to={`/agencyProfile/${_id}/ratings`}>Reviews</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="profile-navigation profile-navigation-bottom">
                        <div className="navigation-links">
                            <NavLink to='/my-agency/agency-timeline'>Timeline</NavLink>
                            <NavLink to='/my-agency/agency-about'>About</NavLink>
                        </div>
                    </div> */}
                </div>
            </div>

            {
                posts.length < 1 ? <div><p className='no-post'>No post yet from this agency</p></div>
                    :
                    Array.isArray(posts) && posts?.map(post => <SingleAgencyPost
                        key={post._id}
                        post={post}
                    ></SingleAgencyPost>).reverse()
            }

        </div>
    );
};

export default ViewAgencyProfile;