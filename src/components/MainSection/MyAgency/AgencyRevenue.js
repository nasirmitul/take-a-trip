import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const AgencyRevenue = () => {
    const { user } = useContext(AuthContext)
    const [agencyRevenues, setAgencyRevenue] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency-revenue/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAgencyRevenue(data)
            })
    }, [])

    return (

        <div>
            <div className="dashboard-navigation">
                <Link to='/my-agency/agency-dashboard'>Pending Personalize Tours</Link>
                <Link className='active' to='/my-agency/agency-dashboard/revenue'>Agency Revenue</Link>
            </div>

            <div className="personalize-tour-dashboard">
                {
                    agencyRevenues.map(
                        agencyRevenue =>
                            <div className='personalized-tour-agency-dashboard' key={agencyRevenue._id}>
                                <div className="info-part">
                                    <div className="info-title">
                                        <h4>{agencyRevenue.locationName} Tour</h4>
                                        <div className="info-row">
                                            <div className="row-1">
                                                <p className='info-name'>Name</p>
                                                <p className='info-data'>{agencyRevenue.username}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Email</p>
                                                <p className='info-data'>{agencyRevenue.userEmail}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Phone</p>
                                                <p className='info-data'>{agencyRevenue.phone_number} days</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Amount</p>
                                                <p className='info-data'>{agencyRevenue.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ).reverse()
                }
            </div>
        </div>
    );
};

export default AgencyRevenue;