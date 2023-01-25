import React, { useContext } from 'react';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AuthContext } from '../../contexts/UserContext';

const Modal = ({ closeModal }) => {
    const { user } = useContext(AuthContext);
    const [selectedImages, setSelectedImages] = useState([])
    const imageHostKey = process.env.REACT_APP_imgbb_key_post;


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
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const tourStatus = form.tourStatus.value;
        const tourImage = form.userPostImage.files[0];
        console.log('tourImage', tourImage);

        formData.append('image', tourImage)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const createPost = {
                        userID: user.uid,
                        allPicture: [
                            {
                                imgURL: imgData.data.url
                            }
                        ],
                        caption: tourStatus,
                        name: user.displayName,
                        profile: user.photoURL,
                        time: new Date(),
                        reacts: 0,
                        comments: []
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
                                alesrt('posted')
                            }
                        })
                        .catch(error => console.log(error))
                }
            })

    }

    return (
        <div className='modal-background'>
            <div className="modal-body">
                <div className="modal-title">
                    <p className='title'>Create Tour Post</p>
                    <div className="close-icon" onClick={() => closeModal(false)}>
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
    );
};

export default Modal;