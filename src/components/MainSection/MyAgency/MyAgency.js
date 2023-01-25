import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import options from '../../../icons/menu.png'
import { BiImageAdd } from 'react-icons/bi';
import img from '../../../icons/imgIcon.png'
import preview from '../../../icons/preview_tour_post.png'

const MyAgency = () => {
    const navigate = useNavigate();
    const { user, userSignOut } = useContext(AuthContext);
    const [agency, setAgency] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [image, setImage] = useState(preview)

    const imageHostKey = process.env.REACT_APP_imgbb_key_post;

    const handleCreateTour = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const tourHeaderImg = form.headerImg.files[0];
        const tourLocation = form.location.value;
        const tourTotalCost = form.cost.value;
        const tourTripDate = form.date.value;
        const tourTripTime = form.time.value;
        const tourTraveler = form.traveler.value;
        const tourTripDay = form.totalDay.value;
        const tourDeparture = form.departure.value;
        const tourHotelInformation = form.hotelInformation.value;
        const tourDescription = form.description.value;

        formData.append('image', tourHeaderImg)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const createTour = {
                        userID: user.uid,
                        agencyEmail: user.email,
                        agencyName: agency[0]?.agencyName,
                        agencyProfile: agency[0]?.agencyProfile,
                        agencyId: agency[0]?._id,
                        image: imgData.data.url,
                        locationName: tourLocation,
                        details: tourDescription,
                        totalCost: tourTotalCost,
                        tourTripDate,
                        tourTripTime,
                        totalTravelers: tourTraveler,
                        leftTravelers: 0,
                        tourTripDay,
                        tourDeparture,
                        tourHotelInformation,
                        time: new Date()
                    }

                    console.log(createTour);

                    fetch('https://take-a-trip-server-sigma.vercel.app/upcomingTours', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(createTour)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                form.reset();
                                setImage(preview);
                                setShowPopup(false)
                            }
                        })
                        .catch(error => console.log(error))

                }
                console.log(imgData);
            })

    }



    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/createAgency?agencyEmail=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tripToken')}`
            }
        })
            .then(res => {
                /* if(res.status === 401 || res.status === 403){
                    userSignOut();
                } */
                return res.json()
            })
            .then(data => {
                setAgency(data)
                console.log('data', data);
            })
    }, [])

    const handleToSettings = () => {
        navigate('/agency-settings',
            {
                state:
                {
                    agency_Id: agency[0]?._id
                }
            }
        );
    }

    const imageHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div>

            {
                agency[0]?.verified ?
                    <>
                        <div className='user-profile'>
                            <div className="profile-header">
                                <div className="cover-image">
                                    <img className='user-cover-image' src={agency[0]?.agencyCover} alt="" />
                                </div>

                                <div className="profile-image-others">
                                    <div className="profile-image">
                                        <img src={agency[0]?.agencyProfile} alt="" />
                                    </div>

                                    <div className="profile-others">
                                        <div className="profile-name-follow">
                                            <div className="profile-name-email">
                                                <h2 className="profile-name">{agency[0]?.agencyName}</h2>
                                                <p className="profile-email">{agency[0]?.agencyEmail}</p>
                                            </div>

                                        </div>
                                        <div className="profile-navigation profile-navigation-top">
                                            <div className="navigation-links">
                                                <NavLink to='/my-agency/agency-timeline'>Timeline</NavLink>
                                                <NavLink to='/my-agency/agency-about'>About</NavLink>
                                                <NavLink to='/my-agency/agency-ratings'>Ratings</NavLink>
                                                <NavLink to='/my-agency/agency-dashboard'>Dashboard</NavLink>
                                            </div>
                                            <div className="profile-settings agency-settings">
                                                <img onClick={handleToSettings} src={options} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-navigation profile-navigation-bottom">
                                    <div className="navigation-links">
                                        <NavLink to='/my-agency/agency-timeline'>Timeline</NavLink>
                                        <NavLink to='/my-agency/agency-about'>About</NavLink>
                                        <NavLink to='/my-agency/agency-ratings'>Ratings</NavLink>
                                        <NavLink to='/my-agency/agency-dashboard'>Dashboard</NavLink>
                                    </div>
                                    <div className="profile-settings">
                                        <Link to='/agency-settings'><img src={options} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="make_post d-flex" onClick={() => setShowPopup(true)}>
                            <div className='w-100 update-post'>
                                <img className="img-fluid user-profile-img" src={agency[0]?.agencyProfile} alt="" />
                                <p>Create A Tour?</p>
                            </div>
                        </div>


                        <div className={`create-tour-popup ${showPopup ? 'show-tour-popup' : 'hide-tour-popup'}`}>
                            <div className='modal-background' onClick={() => setShowPopup(false)}></div>

                            <div className="modal-body">
                                <div className="modal-title">
                                    <p className='title'>Crate A Tour</p>

                                    <div className="close-icon" onClick={() => setShowPopup(false)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                                <form className='create-agency' onSubmit={handleCreateTour}>
                                    <input type="text" name='location' placeholder='location' required />
                                    <input type="number" name='cost' placeholder='Total Cost' required />
                                    <input type="date" name='date' placeholder='Trip Date' required />
                                    <input type="time" name='time' placeholder='Trip Time' required />
                                    <input type="number" name='traveler' placeholder='Total Traveler' required />
                                    <input type="number" name='totalDay' placeholder='How many days?' required />
                                    <input type="text" name='departure' placeholder='Departure From?' required />
                                    <input type="text" name='hotelInformation' placeholder='Hotel Information' required />
                                    <textarea name="description" id="" rows="4" placeholder='Description'></textarea>

                                    <div className="add-image">
                                        <label className='create-tour-image-body' htmlFor="headerImg">
                                            <img className='add-image-icon' src={image} alt="ss" />
                                        </label>
                                        <input onChange={imageHandler} type="file" className='create-tour-image' name='headerImg' id='headerImg' accept="image/png, image/gif, image/jpeg" required />
                                    </div>


                                    <input className='custom-btn' type="submit" value="Create Tour" />

                                </form>
                            </div>
                        </div>
                    </>

                    : <p className='no-post'>Your agency is in verification process...</p>
            }



        </div>
    );
};

export default MyAgency;