import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const AgencyDashboard = () => {
    const { user } = useContext(AuthContext);
    const [showPopup, setShowPopup] = useState(false);
    const [tourData, setTourData] = useState(null);
    const [personalizeTours, setPersonalizeTours] = useState([])
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/personalized-tours/agency/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPersonalizeTours(data)
            })
    }, [refetch])

    

    const handleApproveTour = (id, personalizeTour) => {
        setShowPopup(true)
        setTourData(personalizeTour)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tourData.name);
        const form = e.target;
        const amount = form.amount.value;

        fetch(`https://take-a-trip-server-sigma.vercel.app/personalized-tours/${tourData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true, amount: amount })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefetch(!refetch);
                setShowPopup(false)
            })
    }

    return (
        <div>

            <div className="dashboard-navigation">
                <Link className='active' to='/my-agency/agency-dashboard'>Pending Personalize Tours</Link>
                <Link to='/my-agency/agency-dashboard/revenue'>Agency Revenue</Link>
            </div>
            {
                personalizeTours.length <= 0 && <p className='no-recent-event'>You have to pending personalize Tour</p>
            }
            <div className="personalize-tour-dashboard">
                {
                    personalizeTours.map(
                        personalizeTour =>
                            <div className='personalized-tour-agency-dashboard' key={personalizeTour._id}>
                                <div className="info-part">
                                    <div className="info-title">
                                        <h4>Tour Information</h4>
                                        <div className="info-row">
                                            <div className="row-1">
                                                <p className='info-name'>Name</p>
                                                <Link to={`${user?.email === personalizeTour.email ? `/profile/timeline` : `/user/${personalizeTour.email}`}`}>
                                                    <p className='info-data'>{personalizeTour.name}</p>
                                                </Link>

                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Email</p>
                                                <p className='info-data'>{personalizeTour.email}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Person</p>
                                                <p className='info-data'>{personalizeTour.person}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Journey Start</p>
                                                <p className='info-data'>{personalizeTour.which_day}, {personalizeTour.which_time}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Days</p>
                                                <p className='info-data'>{personalizeTour.days} days</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Departure</p>
                                                <p className='info-data'>{personalizeTour.tourDeparture}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Location</p>
                                                <p className='info-data'>{personalizeTour.location}</p>
                                            </div>
                                            <div className="row-1 description">
                                                <p className='info-name'>Description</p>
                                                <p className='info-data'>{personalizeTour.description}</p>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            {
                                                personalizeTour.status ?
                                                    <button className={personalizeTour.payment ? 'approved' : 'pending'}>{personalizeTour.payment ? 'paid' : 'approved'}</button> :
                                                    <button className="pending" onClick={() => handleApproveTour(personalizeTour._id, personalizeTour)}>pending</button>
                                            }
                                            {personalizeTour.status || <button className='cancel'>cancel</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ).reverse()
                }
            </div>


            {
                showPopup &&
                <div className='add-amount-background'>
                    <form className='add-amount' action="" onSubmit={handleSubmit}>
                        <input type="number" name='amount' className='amount' placeholder='Amount needed' required />
                        <div className="actions">
                            <button type='submit' className="custom-btn">Submit</button>
                            <div onClick={() => setShowPopup(false)} className="custom-btn cancel">Cancel</div>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default AgencyDashboard;