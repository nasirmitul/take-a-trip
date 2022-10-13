import React from 'react';

const Modal = ({ closeModal }) => {
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


                    <div className="add-also">
                        <p>Add</p>

                        <div className="items-to-add">
                            <div className="upload-image">
                                <label className='tour-image-upload' for="tour-image"><i className="fa-solid fa-image"></i></label>
                                <input id="tour-image" type="file" name="photo" required />
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