import React from 'react';
import { useState } from 'react';

const Modal = ({ closeModal }) => {
    const [selectedImages, setSelectedImages] = useState([])


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
    return (
        <div className='modal-background'>
            <div className="modal-body">
                <div className="modal-title">
                    <p className='title'>Create Tour Post</p>
                    <div className="close-icon" onClick={() => closeModal(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="user-input">
                    <div className="tour-caption">
                        <textarea placeholder='How was your recent tour?'></textarea>
                    </div>

                    <div className="selected-images">
                        {
                            selectedImages && selectedImages.map((image) => {

                                return (
                                    <div key={image} className="image">
                                        <img className='user-post-selected-image' src={image} alt="" />

                                        <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>X</button>
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
                                <input id="tour-image" type="file" name="user-post-image" accept="image/png, image/gif, image/jpeg" required multiple onChange={handleAddImage} />
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
            </div>

        </div>
    );
};

export default Modal;