import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const MyAgency = () => {
    const navigate = useNavigate();
    const { user, userSignOut } = useContext(AuthContext);
    const [agency, setAgency] = useState({});

    const handleCreateTour = (event) => {
        event.preventDefault();
        const form = event.target;

        const tourHeaderImg = form.headerImg.value;
        const tourLocation = form.location.value;
        const tourTotalCost = form.cost.value;
        const tourTripDate = form.date.value;
        const tourTripTime = form.time.value;
        const tourTraveler = form.traveler.value;
        const tourTripDay = form.totalDay.value;
        const tourDeparture = form.departure.value;
        const tourHotelInformation = form.hotelInformation.value;
        const tourDescription = form.description.value;

        const createTour = {
            userID: user.uid,
            agencyEmail: user.email,
            agencyName: agency[0]?.agencyName,
            agencyProfile: agency[0]?.agencyProfile,
            image: tourHeaderImg,
            locationName: tourLocation,
            details: tourDescription,
            totalCost: tourTotalCost,
            tourTripDate,
            tourTripTime,
            totalTravelers: tourTraveler,
            tourTripDay,
            tourDeparture,
            tourHotelInformation
        }

        fetch('http://localhost:5000/upcomingTours', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }



    useEffect(() => {
        fetch(`http://localhost:5000/createAgency?agencyEmail=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tripToken')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    userSignOut();
                }
                return res.json()
            })
            .then(data => setAgency(data))
    }, [])

    const handleAgencyDelete = (id) => {
        fetch(`http://localhost:5000/createAgency/${id}`, {
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
            <h1>Agency Name: {agency[0]?.agencyName}</h1>
            <p>Agency Description: {agency[0]?.agencyDescription}</p>
            <p>id: {agency[0]?._id}</p>

            <button className='custom-btn' onClick={() => handleAgencyDelete(agency[0]?._id)}>Delete Agency</button>

            <br />
            <br />
            <br />

            <form className='create-agency' onSubmit={handleCreateTour}>
                <h1>Create a Tour</h1>
                <input type="text" name='headerImg' placeholder='Header Image URL' required />
                <input type="text" name='location' placeholder='location' required />
                <input type="number" name='cost' placeholder='Total Cost' required />
                <input type="date" name='date' placeholder='Trip Date' required />
                <input type="time" name='time' placeholder='Trip Time' required />
                <input type="number" name='traveler' placeholder='Total Traveler' required />
                <input type="number" name='totalDay' placeholder='How many days?' required />
                <input type="text" name='departure' placeholder='Departure From?' required />
                <input type="text" name='hotelInformation' placeholder='Hotel Information' required />
                <textarea name="description" id="" rows="4" placeholder='Description'></textarea>


                <input className='custom-btn' type="submit" value="Create Tour" />

                {/* <button className='custom-btn'>Create Tour</button> */}
            </form>
        </div>
    );
};

export default MyAgency;