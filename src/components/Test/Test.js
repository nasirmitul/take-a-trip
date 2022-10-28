import React from 'react';
import '../../css/style.css'
import man from '../../images/man.jpg'
import globe from '../../images/t.png'
import travel from '../../images/space-travel.jpg'
import menu from '../../icons/menu.png'
import react from '../../icons/react.png'
import comment from '../../icons/comment.png'
import interested from '../../icons/interested.png'
import going from '../../icons/going.png'
import moreInfo from '../../icons/more info.png'

import home from '../../icons/home.png'
import upcomingTours from '../../icons/upcoming tours.png'
import tourAgencies from '../../icons/tour agencies.png'
import RecentEvents from '../../icons/recent event.png'
import profile from '../../icons/profile.png'
import createAgency from '../../icons/create agency.png'
import myAgency from '../../icons/my agency.png'
import settings from '../../icons/settings.png'
import logout from '../../icons/logout.png'


const Test = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="row">



                        <div className="col-lg-3">
                            <section id="left-part">
                                <div className="menu-part">
                                    <h5 className="menu-heading">menu</h5>
                                    <ul>
                                        <li><img src={home} alt="" /><a href="/">Home</a></li>
                                        <li><img src={upcomingTours} alt="" /><a href="/">Upcoming Tours</a></li>
                                        <li><img src={tourAgencies} alt="" /><a href="/">Tour Agencies</a></li>
                                        <li><img src={RecentEvents} alt="" /><a href="/">Recent Event</a></li>
                                        <li><img src={profile} alt="" /><a href="/">profile</a></li>
                                        <li><img src={createAgency} alt="" /><a href="/">Create Agency</a></li>
                                        <li><img src={myAgency} alt="" /><a href="/">My Agency</a></li>
                                    </ul>
                                    <h5 className="menu-heading">Other</h5>
                                    <ul>
                                        <li><img src={settings} alt=""/><a href="/" >Settings</a></li>
                                        <li id="logout"><img src={logout} alt="" /><a href="/">Log Out</a></li>
                                    </ul>
                                </div>

                                <div className="log-profile d-flex">
                                    <div className="img">
                                        <img className="img-fluid profile-img" src={man} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>Mr. Jhon</h2>
                                        <p>jhon@gmail.com</p>
                                    </div>
                                </div>
                            </section>
                        </div>




                        <div className="col-lg-6 border-end border-start">
                            <section id="post-part" className="">
                                <div className="make_post d-flex">

                                    <button type="button" className="w-100 post-button" data-bs-toggle="modal" data-bs-target="#exampleModal">How
                                        was your recent tour?
                                        <div className="post-id-img">
                                            <img className="img-fluid user-profile-img" src={man} alt=""/>
                                        </div>
                                    </button>


                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    ...
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="post">
                                    <div className="id d-flex post-top-part">
                                        <div className="id-name d-flex align-items-center">
                                            <div className="id-img">
                                                <img className="post-user-img" src={man} alt="men"/>
                                            </div>
                                            <div className="id-text ms-4">
                                                <h6>Sharif</h6>
                                                <p>12:03pm, june 17,20</p>
                                            </div>
                                        </div>
                                        <div className="post-menu">
                                            <img src={menu} alt="menu"/>
                                        </div>
                                    </div>

                                    <div className="caption-text">
                                        <p>We are arranging a tour for 3 days 4 night from 1 july, 2022 to 4 july, 2022. Our journey will start from Dhaka at 7:00pm and we will reach at cox’s Bazar at 4:00 am hopefully. Let’s join in the journey and enjoy</p>
                                    </div>

                                    <div className="upload-img">
                                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src={globe} alt="First slide"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src={globe} alt="Second slide"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block w-100" src={globe} alt="Third slide"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="react-comment d-flex justify-content-between">
                                        <div className="react">
                                            <p><img src={react} alt=""/><span>300</span></p>
                                        </div>
                                        <div className="comment">
                                            <p>27 <span>comment</span><img src={comment} alt=""/></p>
                                        </div>
                                    </div>

                                    <div className="comment d-flex">
                                        <input className="form-control w-100" type="search" placeholder="Your thought on it"/>
                                            <button className="btn-comment custom-btn" type="comment">Comment</button>
                                    </div>

                                </div>

                                <div className="popular-post">
                                    <div className="post">
                                        <div className="id d-flex post-top-part">
                                            <div className="id-name d-flex align-items-center">
                                                <div className="id-img">
                                                    <img className="post-user-img" src={man} alt="men"/>
                                                </div>
                                                <div className="id-text  ms-4">
                                                    <h6>Sharif</h6>
                                                    <p>12:03pm, june 17,20</p>
                                                </div>
                                            </div>
                                            <div className="post-menu">
                                                <img src={menu} alt="menu"/>
                                            </div>
                                        </div>

                                        <div className="upload-img">
                                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img className="d-block w-100" src={travel}alt="First slide"/>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="d-block w-100" src="./images/t.png" alt="Second slide"/>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="d-block w-100" src="./images/t.png" alt="Third slide"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popular-text">
                                            <p id="time">August 23 at 7:00 pm</p>
                                            <h4>Cox’s Bazar Tour</h4>
                                            <p>We are arranging a tour for 3 days 4 night from 1 july, 2022 to 4 july, 2022. Our journey will
                                                start from Dhaka at 7:00pm and we will reach at cox’s Bazar at 4:00 am hopefully. Let’s join in the
                                                journey and enjoy...</p>
                                        </div>

                                        <div className="popular-icons d-flex justify-content-between mt-3">
                                            <div className="interested">
                                                <p><a href="/"><img src={interested} alt=""/><span>interested</span></a></p>
                                            </div>
                                            <div className="going">
                                                <p><a href="/"><img src={going} alt=""/><span>Going</span></a></p>
                                            </div>
                                            <div className="info">
                                                <p><a href="/"><img src={moreInfo} alt=""/><span>More info</span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>




                        <div className="col-lg-3">
                            <section id="notification-part">
                                <div className="notifications">
                                    <h3>Notifications</h3>
                                    <hr/>
                                </div>

                                <div className="notification d-flex">
                                    <div className="img">
                                        <img className="img-fluid user-profile-img" src={man} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h5>Sheikh Monsur Tour Agency</h5>
                                        <p>Your Payment is successfully done</p>
                                    </div>
                                </div>

                                <div className="notification d-flex">
                                    <div className="img">
                                        <img className="img-fluid user-profile-img" src={man} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h5>Sheikh Monsur Tour Agency</h5>
                                        <p>Your Payment is successfully done</p>
                                    </div>
                                </div>

                                <div className="notification d-flex">
                                    <div className="img">
                                        <img className="img-fluid user-profile-img" src={man} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h5>Sheikh Monsur Tour Agency</h5>
                                        <p>Your Payment is successfully done</p>
                                    </div>
                                </div>

                                <div className="notification d-flex">
                                    <div className="img">
                                        <img className="img-fluid user-profile-img" src={man} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h5>Sheikh Monsur Tour Agency</h5>
                                        <p>Your Payment is successfully done</p>
                                    </div>
                                </div>
                            </section>
                        </div>


                        
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Test;