import React, { useEffect, useState } from 'react';

const Reports = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/all-reports')
            .then(res => res.json())
            .then(data => {
                setReports(data)
            })
    }, [])

    return (
        <div className='container'>
            <div className="reports">
                <h1 className='main-title' >Pending Reports</h1>

                {
                    reports.length <= 0 && <p className='no-pending'>No pending agencies</p>
                }

                <div className="admin-agency-approve">
                    {
                        reports.map(report =>
                            <div className='personalized-tour-agency-dashboard' key={report._id}>
                                <div className="info-part">
                                    <div className="info-title">
                                        <div className="info-row">
                                            <div className="row-1">
                                                <p className='info-name'>Reported Post Url</p>
                                                <p className='info-data'>{report.reportPostUrl}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Reported Email</p>
                                                <p className='info-data'>{report.email}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Reported Name</p>
                                                <p className='info-data'>{report.name}</p>
                                            </div>

                                            <div className="row-1">
                                                <p className='info-name'>Report By Email</p>
                                                <p className='info-data'>{report.reportByEmail}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Report By Name</p>
                                                <p className='info-data'>{report.reportBy}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Total Reports</p>
                                                <p className='info-data'>{report.reportCount}</p>
                                            </div>
                                           
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

export default Reports;