import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { BiUser, BiImageAlt } from 'react-icons/bi';

const CreateAgency = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [profileActive, setProfileActive] = useState(false)
    const [coverActive, setCoverActive] = useState(false)

    const imageHostKey = process.env.REACT_APP_imgbb_key_post;
    console.log(imageHostKey);


    const [agency, setAgency] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/createAgency?agencyEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAgency(data))
    }, [])

    console.log("agency from navigation", agency[0]?.agencyEmail);

    if (agency[0]?.agencyEmail === user?.email) {
        navigate('/my-agency/agency-timeline')
    }

    const handleProfilePic = () => {
        setProfileActive(true)
        setCoverActive(false)
    }

    const handleCoverPic = () => {
        setProfileActive(false)
        setCoverActive(true)
    }

    const handleCreateAgency = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const agencyProfile = form.profile.files[0];
        const agencyCover = form.cover.files[0];

        const agencyName = form.name.value;
        const agencyPhone = form.phone.value;
        const agencyEmail = user.email;

        const country = form.country.value;
        const state = form.state.value;
        const area = form.area.value;
        const district = form.district.value;

        const nid_num = form.nid_num.value;
        const bank_name = form.bank_name.value;
        const bank_account_num = form.bank_account_num.value;
        const holder_name = form.holder_name.value;
        const branch = form.branch.value;

        const agencyDescription = form.description.value;




        formData.append('image', agencyProfile)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(profile => {
                if (profile.success) {
                    console.log(profile.data.url);
                    var AgencyProfileImage = profile.data.url;
                    formData.append('image', agencyCover)
                    fetch(url, {
                        method: 'POST',
                        body: formData
                    })
                        .then(res => res.json())
                        .then(cover => {
                            if (cover.success) {
                                console.log(cover.data.url);

                                const createAgency = {
                                    userID: user.uid,
                                    agencyName,
                                    agencyPhone,
                                    agencyEmail,
                                    agencyProfile: AgencyProfileImage,
                                    agencyCover: cover.data.url,
                                    country,
                                    state,
                                    area,
                                    district,
                                    nid_num,
                                    bank_name,
                                    bank_account_num,
                                    holder_name,
                                    branch,
                                    agencyDescription,
                                    reviews: [],
                                    personalizeTour: false
                                }

                                console.log('createAgency', createAgency);

                                fetch('http://localhost:5000/createAgency', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(createAgency)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        if (data.acknowledged) {
                                            form.reset();
                                            navigate('/my-agency/agency-timeline')
                                        }
                                    })
                                    .catch(error => console.log(error))
                            }
                        })

                }
            })










        /* const createAgency = {
            userID: user.uid,
            agencyName,
            agencyEmail,
            agencyProfile,
            agencyCover,
            agencyDescription,
            reviews: [],
            personalizeTour: false
        }

        fetch('http://localhost:5000/createAgency', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createAgency)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    navigate('/my-agency')
                }
            })
            .catch(error => console.log(error)) */

    }

    return (
        <div className='create-agency'>
            <div className="create-agency-heading">
                <h1 className='create-agency-title'>Create an agency</h1>
            </div>
            <form className='create-agency-form' onSubmit={handleCreateAgency}>
                <div className="information">
                    <div className="information-title">
                        <h3>Agency Profile</h3>
                    </div>
                    <div className="profile-data">
                        <input type="text" name='name' placeholder='Enter your Agency Name' required />
                        <input type="tel" name='phone' placeholder='Phone Number' required />
                        <input type="email" name='email' defaultValue={user.email} readOnly />
                    </div>
                </div>

                <div className="information">
                    <div className="information-title">
                        <h3>Agency Address</h3>
                    </div>
                    <div className="profile-data">
                        <input type="text" name='country' placeholder='Country' defaultValue='Bangladesh' required readOnly />
                        <input type="text" name='state' placeholder='State' required />
                        <input type="text" name='area' placeholder='Area' required />
                        <input type="text" name='district' placeholder='District' required />
                    </div>
                </div>

                <div className="information">
                    <div className="information-title">
                        <h3>Id and Bank information</h3>
                    </div>
                    <div className="profile-data">
                        <input type="number" name='nid_num' placeholder='NID number' required />
                        <input type="text" name='bank_name' placeholder='Bank Name' required />
                        <input type="number" name='bank_account_num' placeholder='Bank Account Number' required />
                        <input type="text" name='holder_name' placeholder='Account Holder name' required />
                        <input type="text" name='branch' placeholder='Branch' required />
                    </div>
                </div>

                <div className="information">
                    <div className="information-title">
                        <h3>Others</h3>
                    </div>
                    <div className="profile-data">
                        <textarea name="description" id="" rows="4" placeholder='Description'></textarea>
                    </div>
                </div>

                <div className="custom-btn next-button" onClick={handleProfilePic}>Next</div>

                <div className="upload-profile-background">
                    <div className={`upload-profile-picture ${profileActive ? 'show-profile' : 'hide-profile'}`}>
                        <h4 className='upload-profile-title'>Upload profile Picture</h4>
                        <label htmlFor="profile" className='profile-label'>
                            <BiUser className='user-icon'></BiUser>
                        </label>
                        <input className='profile' type="file" name='profile' placeholder='Agency Profile Image' id="profile" accept="image/png, image/gif, image/jpeg" required />
                        <div className="custom-btn next-button" onClick={handleCoverPic}>Next</div>
                    </div>
                </div>

                <div className="upload-cover-background">
                    <div className={`upload-cover-picture ${coverActive ? 'show-cover' : 'hide-cover'}`}>
                        <h4 className='upload-cover-title'>Upload Cover Picture</h4>
                        <label htmlFor="cover" className='cover-label'>
                            <BiImageAlt className='image-icon'></BiImageAlt>
                        </label>
                        <input className='cover' type="file" name='cover' placeholder='Agency Cover Image' id="cover" accept="image/png, image/gif, image/jpeg" required />
                        <button type='submit' className='custom-btn'>Create Agency</button>
                    </div>
                </div>


            </form>




        </div>
    );
};

export default CreateAgency;