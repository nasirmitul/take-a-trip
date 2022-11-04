import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UpComingTour from './UpComingTour';

const UpComingTours = () => {

    const upComingTourData = useLoaderData();

    //For Search By Location
    const [searchLocation, setSearchLocation] = useState('')
    let locationData = upComingTourData.filter(locationValue => locationValue.locationName.toLowerCase().includes(searchLocation.toLowerCase()));

    //For Sorting Data
    const [sort, setSort] = useState('');

    let updateUpcomingTourData = upComingTourData;

    if (sort === 'locationName') {
        const locationName = [...upComingTourData].sort((a, b) =>
            a.locationName > b.locationName ? 1 : -1,
        );

        updateUpcomingTourData = locationName;
        console.log(locationName);
    }
    else if (sort === 'totalRatings') {
        const totalRatings = [...upComingTourData].sort((a, b) => b.totalRating - a.totalRating);
        console.log("totalRatings : ", totalRatings);
        updateUpcomingTourData = totalRatings;
    }
    else if (sort === 'rating') {
        const rating = [...upComingTourData].sort((a, b) => b.ratings - a.ratings);
        console.log("rating : ", rating);
        updateUpcomingTourData = rating;
    }
    else if (sort === 'cost') {
        const cost = [...upComingTourData].sort((a, b) => b.totalCost - a.totalCost);
        console.log("cost : ", cost);
        updateUpcomingTourData = cost;

    }
    else if (sort === 'time') {
        const time = [...upComingTourData].sort((a, b) =>
            a.time > b.time ? 1 : -1,
        );
        console.log(time)
        updateUpcomingTourData = time;
    }
    else {
        console.log("No Data Found");
    }

    // Check weather the user searing or filtering data
    let checkUserPreference = '';


    const handleCheckSearchFocus = (value) => {
        checkUserPreference = value;
        console.log('inside function', checkUserPreference.length);
    }

    const handleCheckSearchBlur = (value) => {
        checkUserPreference = value;
    }

    console.log('outside function', checkUserPreference.length);

    return (
        <div>
            <div className="section-head">
                <div className="section-title">
                    <p>Upcoming Tours for you</p>
                </div>
                <div className="filter-search">
                    <div className="filter">
                        <select name='filteredData' onBlur={() => { setSort('') }} onChange={e => setSort(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="locationName">Location Name</option>
                            <option value="totalRatings">Total Ratings</option>
                            <option value="rating">Ratings</option>
                            <option value="cost">Cost</option>
                            <option value="time">Time</option>
                        </select>
                    </div>
                    <div className="section-search">
                        <input onFocus={() => handleCheckSearchFocus('search-selected')} onBlur={() => handleCheckSearchBlur('')} type="text" placeholder='search by location' onChange={event => setSearchLocation(event.target.value)} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            <div className="up-coming-tour">
                {
                    sort.length > 0 ? updateUpcomingTourData.map(upComingTour => <UpComingTour
                        key={upComingTour.id}
                        upComingTour={upComingTour}
                    ></UpComingTour>) : locationData.map(upComingTour => <UpComingTour
                        key={upComingTour.id}
                        upComingTour={upComingTour}
                    ></UpComingTour>)
                }
            </div>
        </div>
    );
};

export default UpComingTours;