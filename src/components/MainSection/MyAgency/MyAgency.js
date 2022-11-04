import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const MyAgency = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [agency, setAgency] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/createAgency?agencyEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setAgency(data))
    }, [])

    const handleAgencyDelete = (id) => {
        fetch(`http://localhost:5000/createAgency/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0)
                {
                    console.log(data.deletedCount);
                    navigate('/home');
                }
            })
    }

    return (
        <div>
            <h1>Agency Name: {agency[0]?.agencyName}</h1>
            <p>Agency Description: {agency[0]?.agencyDescription}</p>
            <p>id: {agency[0]?._id}</p>

            <button className='custom-btn' onClick={() => handleAgencyDelete(agency[0]?._id)}>Delete Agency</button>
        </div>
    );
};

export default MyAgency;