import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const BookPersonalizeTour = () => {
    const agencyDetail = useLoaderData();

    const { user } = useContext(AuthContext);


    const handlePersonalizeTour = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const person = form.person.value;
        const days = form.days.value;
        const which_day = form.which_day.value;
        const which_time = form.which_time.value;
        const tourDeparture = form.tourDeparture.value;
        const location = form.location.value;
        const description = form.description.value;

        const agencyName = agencyDetail.agencyName;
        const agencyEmail = agencyDetail.agencyEmail;
        const agencyPhone = agencyDetail?.agencyPhone;

        const personalizeTour = {
            name,
            email,
            phone,
            person,
            days,
            which_day,
            which_time,
            tourDeparture,
            location,
            description,
            agencyName,
            agencyEmail,
            agencyPhone,
            status: false,
            payment: false,
            cancel: false,
            amount: 0
        }

        fetch(`https://take-a-trip-server-sigma.vercel.app/personalized-tours`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(personalizeTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('personalize tour booked successfully')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="personalize-heading">
                <h1 className='personalize-title'>Book a personalize tour from <span>{agencyDetail.agencyName}</span></h1>
            </div>
            <form className='personalize-tour-form' onSubmit={handlePersonalizeTour}>
                <input type="text" name='name' placeholder='Enter your Name' defaultValue={user.displayName} required />
                <input type="email" name='email' placeholder='Enter your Email' defaultValue={user.email} required />
                <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
                <input type="number" name='person' placeholder='How many person' required />
                <input type="number" name='days' placeholder='How many days' required />
                <input type="date" name='which_day' placeholder='Which day' required />
                <input type="time" name='which_time' placeholder='Which Time' required />
                <input type="text" name='tourDeparture' placeholder='Departure From' required />
                <input type="text" name='location' placeholder='Where do you want to go' required />
                <textarea name="description" id="" rows="4" placeholder='others'></textarea>
                <button type='submit' className='custom-btn'>Apply for Tour</button>
            </form>
        </div>
    );
};

export default BookPersonalizeTour;