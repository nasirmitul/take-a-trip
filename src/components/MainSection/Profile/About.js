import React, { useContext, useEffect, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AuthContext } from '../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const About = () => {
    const { user } = useContext(AuthContext);
    const [about, setAbout] = useState([]);
    const [showBioField, setShowBioField] = useState(false);
    const [handleSocial, setHandleSocial] = useState(false);
    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/user-profile/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAbout(data)
            })
    }, [showBioField, refetch])

    const handleSubmitBio = (e) => {
        e.preventDefault();

        const form = e.target;

        const bio = form.bio.value;

        fetch(`https://take-a-trip-server-sigma.vercel.app/addbio/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ bio })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setShowBioField(false)
                    setRefetch(!refetch);
                    toast.success('bio updated');
                }
            })

    }


    const handleSubmitSocial = (e) => {
        e.preventDefault();

        const form = e.target;

        const facebook = form.facebook.value;
        const instagram = form.instagram.value;
        const twitter = form.twitter.value;

        const social = {
            facebook,
            instagram,
            twitter
        }

        fetch(`https://take-a-trip-server-sigma.vercel.app/addsocial/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(social)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setHandleSocial(false)
                    setRefetch(!refetch);
                    toast.success('social links updated');
                }
            })
    }

    return (
        <div>
            <div className="profile-about">
                <div className="bio">
                    <div className="section-heading">
                        <h6 className='section-heading-text'>Bio</h6>
                        <h6 className='section-heading-text' onClick={() => setShowBioField(true)}><span>edit</span></h6>
                    </div>

                    {
                        showBioField || <p>{about?.bio}</p>
                    }

                    {
                        showBioField &&
                        <div className="add-bio">
                            <form action="" onSubmit={handleSubmitBio}>
                                <textarea name="bio" id="" cols="30" rows="10" placeholder='write bio' defaultValue={about?.bio} required></textarea>
                                <button type='submit' className="custom-btn">Add bio</button>
                            </form>
                        </div>
                    }

                </div>



                <div className="social-accounts">
                    <h6 className='section-heading'>Other Social Media Accounts</h6>
                    <div className="all-social-accounts">

                        <div className="social-facebook">
                            <div className="">
                                {
                                    handleSocial ||
                                    <>
                                        <div className="check-in-location d-flex align-items-center justify-content-between">
                                            <div className="check-in-logo Location d-flex align-items-center ">
                                                <div className="check-logo">
                                                    <FaFacebook className='social-icons facebook'></FaFacebook>
                                                </div>
                                                <div className="check-location">
                                                    <p className="location-name">Facebook</p>
                                                    <small><a href={about?.facebook}>{about?.facebook|| 'no link'}</a></small>
                                                </div>
                                            </div>
                                            <div className="check-icon">
                                                <BsThreeDots onClick={() => setHandleSocial(true)} className='three-dot-icon'></BsThreeDots>
                                            </div>

                                        </div>
                                        <div className="check-in-location d-flex align-items-center justify-content-between">
                                            <div className="check-in-logo Location d-flex align-items-center ">
                                                <div className="check-logo">
                                                    <AiFillInstagram className='social-icons instagram'></AiFillInstagram>
                                                </div>
                                                <div className="check-location">
                                                    <p className="location-name">Instagram</p>
                                                    <small><a href={about?.instagram}>{about?.instagram || 'no link'}</a></small>
                                                </div>
                                            </div>
                                            <div className="check-icon">
                                                <BsThreeDots onClick={() => setHandleSocial(true)} className='three-dot-icon'></BsThreeDots>
                                            </div>

                                        </div>
                                        <div className="check-in-location d-flex align-items-center justify-content-between">
                                            <div className="check-in-logo Location d-flex align-items-center ">
                                                <div className="check-logo">
                                                    <AiOutlineTwitter className='social-icons twitter'></AiOutlineTwitter>
                                                </div>
                                                <div className="check-location">
                                                    <p className="location-name">Twitter</p>
                                                    <small><a href={about?.twitter}>{about?.twitter || 'no link'}</a></small>
                                                </div>
                                            </div>
                                            <div className="check-icon">
                                                <BsThreeDots onClick={() => setHandleSocial(true)} className='three-dot-icon'></BsThreeDots>
                                            </div>

                                        </div>
                                    </>
                                }

                            </div>
                            {
                                handleSocial &&
                                <div className="add-link">
                                    <form action="" onSubmit={handleSubmitSocial}>
                                        <input name="facebook" placeholder='facebook link' ></input>
                                        <input name="instagram" placeholder='instagram link' ></input>
                                        <input name="twitter" placeholder='twitter link' ></input>
                                        <button type='submit' className="custom-btn">Submit Links</button>
                                    </form>
                                </div>
                            }
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;