import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { BiUser, BiImageAlt } from 'react-icons/bi';
import profile_preview from '../../../icons/profile-preview.png'
import cover_preview from '../../../icons/cover_preview.png'
import { toast } from 'react-hot-toast';

const CreateAgency = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [profileActive, setProfileActive] = useState(false);
    const [coverActive, setCoverActive] = useState(false);
    const [nidFrontActive, setNidFrontActive] = useState(false);
    const [nidBackActive, setNidBackActive] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const [profile, setProfile] = useState(profile_preview)
    const [cover, setCover] = useState(cover_preview)


    const [nidFront, setNidFront] = useState(null)
    const [nidBack, setNidBack] = useState(null)


    const imageHostKey = process.env.REACT_APP_imgbb_key_post;
    console.log(imageHostKey);


    const [agency, setAgency] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/createAgency?agencyEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAgency(data))
    }, [])

    console.log("agency from navigation", agency[0]?.agencyEmail);

    if (agency[0]?.agencyEmail === user?.email) {
        navigate('/my-agency/agency-timeline')
    }

    const handleNidFront = () => {
        setNidFrontActive(true)
        setNidBackActive(false)
        setProfileActive(false)
        setCoverActive(false)
    }

    const handleNidBack = () => {
        setNidFrontActive(false)
        setNidBackActive(true)
        setProfileActive(false)
        setCoverActive(false)
    }

    const handleProfilePic = () => {
        setNidFrontActive(false)
        setNidBackActive(false)
        setProfileActive(true)
        setCoverActive(false)
    }

    const handleCoverPic = () => {
        setNidFrontActive(false)
        setNidBackActive(false)
        setProfileActive(false)
        setCoverActive(true)
    }

    const handleTermsCancel = () => {
        navigate('/')
        localStorage.setItem('acceptTerms', 'false');
    }

    const handleTermsAccept = () => {
        setAcceptTerms(true);
        localStorage.setItem('acceptTerms', 'true');
    }

    useEffect(() => {
        const terms = localStorage.getItem('acceptTerms');
        if (terms === 'true') {
            setAcceptTerms(true)
        }

    }, [])

    const handleCreateAgency = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const agencyProfile = form.profile.files[0];
        const agencyCover = form.cover.files[0];
        const nidFront = form.nidFront.files[0];
        const nidBack = form.nidBack.files[0];

        const agencyName = form.name.value;
        const agencyPhone = form.phone.value;
        const agencyEmail = user.email;
        const agencyWebsite = form.website.value;

        const country = form.country.value;
        const state = form.state.value;
        const area = form.area.value;
        const district = form.district.value;

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
                                var agencyCoverImage = cover.data.url;
                                formData.append('image', nidFront)
                                fetch(url, {
                                    method: 'POST',
                                    body: formData
                                })
                                    .then(res => res.json())
                                    .then(nidFront => {
                                        if (nidFront.success) {
                                            console.log(nidFront.data.url);
                                            var agencyNidFront = nidFront.data.url;
                                            formData.append('image', nidBack)
                                            fetch(url, {
                                                method: 'POST',
                                                body: formData
                                            })
                                                .then(res => res.json())
                                                .then(nidBack => {
                                                    if (nidBack.success) {
                                                        console.log(nidBack.data.url);
                                                        var agencyNidBack = nidBack.data.url;

                                                        const createAgency = {
                                                            userID: user.uid,
                                                            agencyName,
                                                            agencyPhone,
                                                            agencyEmail,
                                                            agencyWebsite,
                                                            agencyProfile: AgencyProfileImage,
                                                            agencyCover: agencyCoverImage,
                                                            nidFrontImage: agencyNidFront,
                                                            nidBackImage: agencyNidBack,
                                                            country,
                                                            state,
                                                            area,
                                                            district,
                                                            bank_name,
                                                            bank_account_num,
                                                            holder_name,
                                                            branch,
                                                            agencyDescription,
                                                            reviews: [],
                                                            personalizeTour: false,
                                                            verified: false
                                                        }

                                                        console.log('createAgency', createAgency);

                                                        fetch('https://take-a-trip-server-sigma.vercel.app/createAgency', {
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
                                                                    toast.success('agency created successfully');
                                                                }
                                                            })
                                                            .catch(error => console.log(error))


                                                    }
                                                })
                                        }
                                    })

                            }
                        })

                }
            })

    }

    const imageNidFrontHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setNidFront(reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };


    const imageNidBackHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setNidBack(reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };


    const imageProfileHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfile(reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const imageCoverHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setCover(reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div className='create-agency'>
            <div className="create-agency-heading">
                <h1 className='create-agency-title'>Create an agency</h1>
            </div>

            {
                acceptTerms ||
                <div className="accept-terms">
                    <h1 className="terms-title">Terms and Conditions</h1>
                    <div className="terms-message">Accept <span>Take A Trip</span> terms and conditions to continue to create agency </div>
                    <div className="actions">
                        <button onClick={handleTermsCancel} className='cancel'>Cancel</button>
                        <button onClick={handleTermsAccept} className='accept'>Accept</button>
                    </div>
                </div>
            }

            {
                acceptTerms &&
                <form className='create-agency-form' onSubmit={handleCreateAgency}>
                    <div className="information">
                        <div className="information-title">
                            <h3>Agency Profile</h3>
                        </div>
                        <div className="profile-data">
                            <input type="text" name='name' placeholder='Enter your Agency Name' required />
                            <input type="tel" name='phone' placeholder='Phone Number' required />
                            <input type="email" name='email' defaultValue={user.email} readOnly />
                            <input type="text" name='website' placeholder='Agency Website' />
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
                            <h3>Bank information</h3>
                        </div>
                        <div className="profile-data">
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
                    <div className="custom-btn next-button" onClick={handleNidFront}>Next</div>




                    <div className="upload-nidFront">
                        <div className={`upload-nidFront-picture ${nidFrontActive ? 'show-nidFront' : 'hide-nidFront'}`}>
                            <h4 className='upload-nidFront-title'>Upload Nid Front Image</h4>
                            <label htmlFor="nidFront" className='nidFront-label'>
                                <img className='user-icon' src={nidFront} alt="" />
                                <p className='text'>Click here to add Nid Front Image</p>
                            </label>
                            <input onChange={imageNidFrontHandler} className='nidFront' type="file" name='nidFront' placeholder='Agency nidFront Image' id="nidFront" accept="image/png, image/gif, image/jpeg, image/jpg" required />
                            <div className="custom-btn next-button" onClick={handleNidBack}>Next</div>
                        </div>
                    </div>


                    <div className="upload-nidBack">
                        <div className={`upload-nidBack-picture ${nidBackActive ? 'show-nidBack' : 'hide-nidBack'}`}>
                            <h4 className='upload-nidBack-title'>Upload Nid Back Image</h4>
                            <label htmlFor="nidBack" className='nidBack-label'>
                                <img className='user-icon' src={nidBack} alt="" />
                                <p className='text'>Click here to add Nid Back Image</p>
                            </label>
                            <input onChange={imageNidBackHandler} className='nidBack' type="file" name='nidBack' placeholder='Agency nidBack Image' id="nidBack" accept="image/png, image/gif, image/jpeg" required />
                            <div className="custom-btn next-button" onClick={handleProfilePic}>Next</div>
                        </div>
                    </div>




                    <div className="upload-profile-background">
                        <div className={`upload-profile-picture ${profileActive ? 'show-profile' : 'hide-profile'}`}>
                            <h4 className='upload-profile-title'>Upload profile Picture</h4>
                            <label htmlFor="profile" className='profile-label'>
                                <img className='user-icon' src={profile} alt="" />
                                {/* <BiUser className='user-icon'></BiUser> */}
                            </label>
                            <input onChange={imageProfileHandler} className='profile' type="file" name='profile' placeholder='Agency Profile Image' id="profile" accept="image/png, image/gif, image/jpeg" required />
                            <div className="custom-btn next-button" onClick={handleCoverPic}>Next</div>
                        </div>
                    </div>

                    <div className="upload-cover-background">
                        <div className={`upload-cover-picture ${coverActive ? 'show-cover' : 'hide-cover'}`}>
                            <h4 className='upload-cover-title'>Upload Cover Picture</h4>
                            <label htmlFor="cover" className='cover-label'>
                                <img className='image-icon' src={cover} alt="" />
                                {/* <BiImageAlt className='image-icon'></BiImageAlt> */}
                            </label>
                            <input onChange={imageCoverHandler} className='cover' type="file" name='cover' placeholder='Agency Cover Image' id="cover" accept="image/png, image/gif, image/jpeg" required />
                            <button type='submit' className='custom-btn'>Create Agency</button>
                        </div>
                    </div>
                </form>
            }

        </div>
    );
};

export default CreateAgency;