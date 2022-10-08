import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UpComingTour from './UpComingTour';

const UpComingTours = () => {

    const upComingTourData = useLoaderData();
    // console.log(upComingTourData);


    //For Search By Location
    const [searchLocation, setSearchLocation] = useState('')

    let locationData = upComingTourData.filter(locationValue => locationValue.locationName.toLowerCase().includes(searchLocation.toLowerCase()));

    /* let newString = '';
    for (let char of searchLocation) {
        if(char === ' ')
        {
            continue;
        }
        else{
            newString = newString + char;
        }
    } */


    //For Sorting Data
    const sortData = (a, b) => {
        if (a.locationName < b.locationName) {
            return -1;
        }
        else if (a.locationName > b.locationName) {
            return 1;
        }
        else {
            return 0;
        }
    }

    const [sort, setSort] = useState('');
    let sortedData = [];
    if (sort === '') {
        sortedData = upComingTourData;
        console.log('this is empty');
    }
    else if (sort === 'default') {
        sortedData = upComingTourData;
        console.log('this is default');
    }
    else if (sort === 'locationName') {
        sortedData = upComingTourData.sort(sortData);
        console.log('this is locationName');
    }
    else if (sort === 'totalRatings') {
        sortedData = upComingTourData.sort(sortData);
        console.log('this is totalRatings');
    }
    else if (sort === 'rating') {
        sortedData = upComingTourData.sort(sortData);
        console.log('this is rating');
    }
    else if (sort === 'cost') {
        sortedData = upComingTourData.sort(sortData);
        console.log('this is cost');
    }
    else if (sort === 'time') {
        sortedData = upComingTourData.sort(sortData);
        console.log('this is time');
    }
    else {
        console.log("No Data Found");
    }



    return (
        <div>
            <div className="section-head">
                <div className="section-title">
                    <p>Upcoming Tours for you</p>
                </div>
                <div className="filter-search">
                    <div className="filter">
                        <select name='filteredData' onChange={e => setSort(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="locationName">Location Name</option>
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