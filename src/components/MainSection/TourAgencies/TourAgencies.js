import React from 'react';
import TourAgency from './TourAgency';

const TourAgencies = () => {
    return (
        <div>
            <div className="section-head">
                <div className="section-title">
                    <p>Tour Agencies</p>
                </div>
                <div className="filter-search">
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
                </div>
            </div>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
            <TourAgency></TourAgency>
        </div>
    );
};

export default TourAgencies;