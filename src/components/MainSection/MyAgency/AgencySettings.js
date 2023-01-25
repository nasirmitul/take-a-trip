import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AgencySettings = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { agency_Id } = state || {};


    const handleAgencyDelete = () => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/createAgency/${agency_Id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    navigate('/home');
                }
            })
    }

    return (
        <div>
            <p>{agency_Id}</p>
            <button className='custom-btn' onClick={handleAgencyDelete}>Delete Agency</button>
        </div>
    );
};

export default AgencySettings;