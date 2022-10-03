import React from 'react';
import '../../../css/style.css'

import man from '../../../images/man.jpg'
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

const Home = () => {
    return (
        <div>
            <section id="post-part" className="">
                <div className="make_post d-flex">

                    <button type="button" className="w-100 post-button" data-bs-toggle="modal" data-bs-target="#exampleModal">How
                        was your recent tour?
                        <div className="post-id-img">
                            <img className="img-fluid user-profile-img" src={man} alt="" />
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
            <SingleUserPost></SingleUserPost>
            <SingleAgencyPost></SingleAgencyPost>
            <SingleUserPost></SingleUserPost>
            <SingleAgencyPost></SingleAgencyPost>
            <SingleUserPost></SingleUserPost>
            <SingleAgencyPost></SingleAgencyPost>
        
            </section>
        </div>
    );
};

export default Home;