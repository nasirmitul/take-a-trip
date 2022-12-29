import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const CreateAgency = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);



    const [agency, setAgency] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/createAgency?agencyEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAgency(data))
    }, [])

    console.log("agency from navigation", agency[0]?.agencyEmail);

    if(agency[0]?.agencyEmail === user?.email) {
        navigate('/my-agency/agency-timeline')
    }

    const handleCreateAgency = event => {
        event.preventDefault();
        const form = event.target;

        const agencyName = form.name.value;
        const agencyEmail = user.email;
        const agencyProfile = form.profile.value;
        const agencyCover = form.cover.value;
        const agencyDescription = form.description.value;

        const createAgency = {
            userID: user.uid,
            agencyName,
            agencyEmail,
            agencyProfile,
            agencyCover,
            agencyDescription
        }

        console.log(createAgency);

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
            .catch(error => console.log(error))

    }

    return (
        <div>
            <form className='create-agency' onSubmit={handleCreateAgency}>
                <h1>Create an Agency</h1>
                <input type="text" name='name' placeholder='Enter your Agency Name' required />
                <input type="email" defaultValue={user.email} readOnly />
                <input type="text" name='profile' placeholder='Agency Profile Image' required />
                <input type="text" name='cover' placeholder='Agency Cover Image' required />
                <textarea name="description" id="" rows="4" placeholder='Description'></textarea>
                <button className='custom-btn'>Crete Agency</button>
            </form>
        </div>
    );
};

export default CreateAgency;