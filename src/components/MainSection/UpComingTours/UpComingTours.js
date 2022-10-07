import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpComingTour from './UpComingTour';

const UpComingTours = () => {

    const upComingTourData = useLoaderData();

    return (
        <div>
            <div className="section-head">
                <div className="section-title">
                    <p>Upcoming Tours for you</p>
                </div>
                <div className="filter-search">
                    <div className="filter">
                        <select name='filteredData'>
                            <option value="default">Default</option>
                            <option value="totalRatings">Total Ratings</option>
                            <option value="rating">Ratings</option>
                            <option value="cost">Cost</option>
                            <option value="time">Time</option>
                        </select>
                    </div>
                    <div className="section-search">
                        <input type="text" placeholder='search' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            <div className="up-coming-tour">
            {
                upComingTourData.map(upComingTour => <UpComingTour
                key={upComingTour.id}
                upComingTour = {upComingTour}
                ></UpComingTour>)
            }
            </div>
            
        </div>

    );
};

export default UpComingTours;