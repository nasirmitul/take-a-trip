import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/UserContext';
import RequestedTours from './RequestedTours';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const RequestTour = () => {

    const [requestActive, setRequestActive] = useState(false);
    const [refetch, setRefetch] = useState(false);

    const handleRefetch = () => {
        setRefetch(!refetch);
    }

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
            allBids: [],
            timesUp: false,
            time: new Date()
        }

        fetch(`https://take-a-trip-server-sigma.vercel.app/request-tour`, {
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
                    toast.success('Tour request successful')
                    setRequestActive(false)
                    setRefetch(!refetch)
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="recent-event-heading">
                <h1 className='recent-event-title'>Request Tour</h1>
            </div>

            {
                requestActive &&
                <form className='personalize-tour-form' onSubmit={handlePersonalizeTour}>
                    <input type="text" name='name' placeholder='Enter your Name' defaultValue={user.displayName} required />
                    <input type="email" name='email' placeholder='Enter your Email' defaultValue={user.email} required />
                    <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
                    <input type="number" name='person' placeholder='How many person' required />
                    <input type="number" name='days' placeholder='How many days' required />
                    <input type="date" name='which_day' placeholder='Which day' required />
                    <input type="time" name='which_time' id='timepicker' placeholder='Which Time' required />
                    <input type="text" name='tourDeparture' placeholder='Departure From' required />
                    <input type="text" name='location' placeholder='Where do you want to go' required />
                    <textarea name="description" id="" rows="4" placeholder='Others info eg. facilities you want or anything else'></textarea>
                    <button type='submit' className='custom-btn'>Request A Tour</button>
                    <div onClick={() => setRequestActive(false)} className='cancel-button'>Cancel</div>
                </form>
            }


            {
                requestActive || <>

                    <div style={{ 'display': 'flex', 'gap': '20px', 'width': '100%' }}>
                        <div onClick={() => setRequestActive(true)} className='add-request'>
                            <p>Add a request</p>
                            <BiPlus className='plus-icon'></BiPlus>
                        </div>

                        <div className='add-request'><Link style={{ 'color': 'white' }} to='/accepted-tour'>Accepted Tour</Link></div>
                    </div>

                    <RequestedTours refetch={refetch} handleRefetch={handleRefetch}></RequestedTours>
                </>
            }




        </div>
    );
};

export default RequestTour;