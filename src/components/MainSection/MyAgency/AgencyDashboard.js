import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const AgencyDashboard = () => {
    const { user } = useContext(AuthContext);
    const [showPopup, setShowPopup] = useState(false);
    const [tourData, setTourData] = useState(null);
    const [personalizeTours, setPersonalizeTours] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/personalized-tours/agency/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPersonalizeTours(data)
            })
    }, [])


    const handleApproveTour = (id, personalizeTour) => {
        setShowPopup(true)
        setTourData(personalizeTour)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(tourData.name);
        const form = e.target;

        const amount = form.amount.value;


        fetch(`http://localhost:5000/personalized-tours/${tourData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true, amount: amount })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h1>Personalized Tour</h1>
            {
                personalizeTours.map(
                    personalizeTour =>

                        <div key={personalizeTour._id}>
                            <p>{personalizeTour.name}</p>
                            <p>{personalizeTour.email}</p>
                            <button onClick={() => handleApproveTour(personalizeTour._id, personalizeTour)}>{personalizeTour.status ? 'approved' : 'pending'}</button>
                            <button>cancel</button>
                        </div>
                )
            }

            {
                showPopup &&
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="number" name='amount' className='amount' placeholder='Amount needed' required />
                        <button type='submit' className="custom-btn">Submit</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default AgencyDashboard;