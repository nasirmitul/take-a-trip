import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const PendingAgencies = () => {

    const [agencies, setAgencies] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/all-agency')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAgencies(data);
            })
    }, [refetch])

    const handleCancel = (id) => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/delete-agency/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.error('agency Removed')
                setRefetch(!refetch)
            })
    }

    const handleApprove = (id) => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/approve-agency/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('agency approved')
                setRefetch(!refetch);
            })
    }

    return (
        <div className='container'>
            <div className="agency-approval">
                <h1 className='main-title'>Pending Agencies</h1>
                {
                    agencies.length <= 0 && <p className='no-pending'>No pending agencies</p>
                }

                <div className="admin-agency-approve">
                    {
                        agencies.map(agency =>
                            <div className='personalized-tour-agency-dashboard' key={agency._id}>
                                <div className="info-part">
                                    <div className="info-title">
                                        <h4 className='agency-name-title'>Agency: <span>{agency.agencyName}</span></h4>
                                        <div className="info-row">
                                            <div className="row-1">
                                                <p className='info-name'>Email</p>
                                                <p className='info-data'>{agency.agencyEmail}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Phone</p>
                                                <p className='info-data'>{agency.agencyPhone}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>State</p>
                                                <p className='info-data'>{agency.state}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Area</p>
                                                <p className='info-data'>{agency.area}, {agency.which_time}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>District</p>
                                                <p className='info-data'>{agency.district} days</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Bank Name</p>
                                                <p className='info-data'>{agency.bank_name}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Bank Account No</p>
                                                <p className='info-data'>{agency.bank_account_num}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Account Holder</p>
                                                <p className='info-data'>{agency.holder_name}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Branch</p>
                                                <p className='info-data'>{agency.branch}</p>
                                            </div>
                                            <div className="nid-images">
                                                <img className='nidFrontImage' src={agency.nidFrontImage} alt="" />
                                            </div>
                                            <div className="nid-images">
                                                <img className='nidBackImage' src={agency.nidBackImage} alt="" />
                                            </div>
                                            <div className="row-1 description">
                                                <p className='info-name'>Description</p>
                                                <p className='info-data'>{agency.agencyDescription}</p>
                                            </div>
                                        </div>

                                        <div className="actions">

                                            {
                                                agency.verified ? <button className="approved">Approved</button> :
                                                    <>
                                                        <button className="pending" onClick={() => handleApprove(agency._id)}>Approve</button>
                                                        <button className="cancel" onClick={() => handleCancel(agency._id)}>Cancel</button>
                                                    </>
                                            }
                                            {/* {
                            agency.status ?
                                <button className={agency.payment ? 'approved' : 'pending'}>{agency.payment ? 'paid' : 'approved'}</button> :
                                <button className="pending" onClick={() => handleApproveTour(agency._id, agency)}>pending</button>
                        }
                        {agency.status || <button className='cancel'>cancel</button>} */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ).reverse()
                    }
                </div>
            </div>
        </div>
    );
};

export default PendingAgencies;