import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UpComingTour from './UpComingTour';

const UpComingTours = () => {

    const upComingTourData = useLoaderData();

    const [searchLocation, setSearchLocation] = useState('')
    // console.log(searchLocation);

    let locationData = upComingTourData.filter(locationValue => locationValue.locationName.toLowerCase().includes(searchLocation.toLowerCase()));
    // console.log(locationData);

    let newString = '';
    for (let char of searchLocation) {
        if(char === ' ')
        {
            continue;
        }
        else{
            newString = newString + char;
        }
    }


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
                        <input type="text" placeholder='search by location' onChange={event => setSearchLocation(event.target.value)} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            <div className="up-coming-tour">
                {
                    locationData.map(upComingTour => <UpComingTour
                        key={upComingTour.id}
                        upComingTour={upComingTour}
                    ></UpComingTour>)
                }
            </div>

        </div>

    );
};

export default UpComingTours;