import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import '../../../css/style.css'

import notification from '../../../icons/notification.png'
import SingleUserPost from './SingleUserPost';
import SingleAgencyPost from './SingleAgencyPost';
import Notifications from '../../Notifications/Notifications';
import { AuthContext } from '../../../contexts/UserContext';

import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import Processing from '../../LoadingScreen/Processing';
import Loading from '../../LoadingScreen/Loading';
import { toast } from 'react-hot-toast';

const Home = () => {
    const [selectedImages, setSelectedImages] = useState([])
    const imageHostKey = process.env.REACT_APP_imgbb_key_post;
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [loadData, setLoadData] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    

    const handleAddImage = (event) => {
        const selectedImage = event.target.files;
        const selectedImageArray = Array.from(selectedImage);
        const imageArray = selectedImageArray.map((image) => {
            return URL.createObjectURL(image)
        })
        const totalSelectedImage = selectedImageArray.length + selectedImages.length;
        if (totalSelectedImage <= 10) {
            setSelectedImages((previousImage) => previousImage.concat(imageArray))
        }
        else {
            return
        }
        console.log(totalSelectedImage);
    }


    const handleNewPostSubmit = (event) => {
        setUploading(true);
        setOpenModal(false)
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const tourStatus = form.tourStatus.value;
        const tourImage = form.userPostImage.files;
        console.log(tourImage.length);

        var allImages = [];

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        for (let i = 0; i < tourImage.length; i++) {
            const postTourImage = form.userPostImage.files[i];
            formData.append('image', postTourImage)
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        console.log(imgData.data.url, form.userPostImage.files[i]);
                        allImages.push({ imgURL: imgData.data.url })
                        console.log('arr', allImages);

                        if (tourImage.length === allImages.length) {
                            const createPost = {
                                userID: user.uid,
                                allPicture: allImages,
                                caption: tourStatus,
                                name: user.displayName,
                                email: user.email,
                                profile: user.photoURL,
                                time: new Date(),
                                reacts: 0,
                                comments: [],
                                reacts_uid: []
                            }

                            console.log(createPost);
                            fetch('https://take-a-trip-server-sigma.vercel.app/posts', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(createPost)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data.acknowledged) {
                                        form.reset();
                                        setOpenModal(false)
                                        setLoadData(true)
                                        setUploading(false);
                                        setSelectedImages([])
                                        toast.success('Posted successfully');
                                    }
                                })
                                .catch(error => console.log(error))

                            setLoadData(false)
                        }
                    }
                })
        }
    }

    const handleSearch = () => {
        navigate('/search')
    }


    /* const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://take-a-trip-server-sigma.vercel.app/posts');
            const data = await res.json();
            return data;
        }
    }) */

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data)
            })
    }, [loadData, refetch])

    const handleRefetch = () => {
        setRefetch(!refetch);
    }

    if(!user){
        return navigate('/signin')
    }

    return (
        <div>
            {
                uploading && <Processing></Processing>
            }
            <section id="middle-section" className="middle-section">

                <div className="search-notification">
                    <div className="search-bar">
                        <input onClick={handleSearch} className='search' type="text" name="" id="" placeholder='search' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    {/* <div className="notification-icon-popup">
                        <div className="notification-icon" onClick={() => setNotifications(!notifications)}>
                            <img src={notification} alt="" />
                        </div>
                        <div className="show-notification">
                            {notifications && <Notifications></Notifications>}
                        </div>
                    </div> */}
                </div>

                <div className="make_post d-flex">
                    <div className='w-100 update-post' onClick={() => setOpenModal(true)}>
                        <img className="img-fluid user-profile-img" src={user.photoURL} alt="" />
                        <p>How was your recent tour?</p>
                    </div>

                    <div className='post-modal'>
                        {
                            openModal && <div>
                                <div className='modal-background' onClick={() => setOpenModal(false)}></div>
                                <div className="modal-body">
                                    <div className="modal-title">
                                        <p className='title'>Create Tour Post</p>
                                        <div className="close-icon" onClick={() => setOpenModal(false)}>
                                            <i className="fa-solid fa-xmark"></i>
                                        </div>
                                    </div>

                                    <form action="" onSubmit={handleNewPostSubmit}>
                                        <div className="user-input">
                                            <div className="tour-caption">
                                                <textarea placeholder='How was your recent tour?' name='tourStatus' required></textarea>
                                            </div>

                                            <div className="selected-images">
                                                {
                                                    selectedImages && selectedImages.map((image) => {
                                                        return (
                                                            <div key={image} className="user-selected-images">
                                                                <img className='user-post-selected-image' src={image} alt="" />
                                                                <button className='cancel-image' onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}><RxCross2 className='cross-icon'></RxCross2></button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="add-also">
                                                <p>Add</p>

                                                <div className="items-to-add">
                                                    <div className="upload-image">
                                                        <label className='tour-image-upload' htmlFor="tour-image"><i className="fa-solid fa-image"></i></label>
                                                        <input id="tour-image" type="file" name="userPostImage" accept="image/png, image/gif, image/jpeg" required multiple onChange={handleAddImage} />
                                                    </div>

                                                    <div className="add-location">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="upload-button">
                                            <button>Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>

                </div>

                {
                    Array.isArray(posts) && posts?.map(post => <SingleUserPost
                        key={post._id}
                        post={post}
                        handleRefetch={handleRefetch}
                    ></SingleUserPost>)
                }

                {/* <SingleAgencyPost></SingleAgencyPost> */}

            </section>
        </div>
    );
};

export default Home;