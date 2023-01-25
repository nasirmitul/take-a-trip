import React, { useEffect, useState } from 'react';
import TourAgency from './TourAgency';

const TourAgencies = () => {
    const [tourAgencies, setTourAgencies] = useState([]);
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/createAgency')
            .then(res => res.json())
            .then(data => setTourAgencies(data))
    }, [])
    return (
        <div>
            <div className="section-head">
                <div className="section-title">
                    <p>Tour Agencies</p>
                </div>
                {/* <div className="filter-search">
                    <div className="filter">
                        <select name='filteredData'>
                            <option value="default">Default</option>
                            <option value="locationName">Location Name</option>
                            <option value="totalRatings">Total Ratings</option>
                            <option value="rating">Ratings</option>
                            <option value="cost">Cost</option>
                            <option value="time">Time</option>
                        </select>
                    </div>
                    <div className="section-search">
                        <input type="text" placeholder='search by location' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div> */}
            </div>
            {
                tourAgencies.map(tourAgency => <TourAgency key={tourAgency._id} tourAgency={tourAgency}></TourAgency>)
            }
        </div>
    );
};

export default TourAgencies;