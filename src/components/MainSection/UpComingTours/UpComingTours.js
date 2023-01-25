import React, { useEffect, useState } from 'react';
import UpComingTour from './UpComingTour';


const UpComingTours = () => {
    const [upComingTourData, setUpComingTourData] = useState([]);

    useEffect(() => {
        const url = `https://take-a-trip-server-sigma.vercel.app/upcomingTours`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpComingTourData(data.upComingTourData);
            })
    }, [])


    //For Search By Location
    const [searchLocation, setSearchLocation] = useState('')
    let locationData = upComingTourData?.filter(locationValue => locationValue.locationName.toLowerCase().includes(searchLocation.toLowerCase()));

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

    // Check weather the user searching or filtering data
    let checkUserPreference = '';

    const handleCheckSearchFocus = (value) => {
        checkUserPreference = value;
        console.log('inside function', checkUserPreference.length);
    }

    const handleCheckSearchBlur = (value) => {
        checkUserPreference = value;
    }

    console.log('outside function', checkUserPreference.length);



    /* const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(upComingTourData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(upComingTourData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, upComingTourData]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % upComingTourData.length;

        setItemOffset(newOffset);
    } */

    return (
        <div>
            <div className="section-head">
                <div className="section-title">
                    <p>Upcoming Tours for you</p>
                </div>
                <div className="filter-search">
                    <div className="filter-data">
                        <button>filter</button>
                    </div>
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
                        <input onClick={() => { setSort('') }} onFocus={() => handleCheckSearchFocus('search-selected')} onBlur={() => handleCheckSearchBlur('')} type="text" placeholder='search by location' onChange={event => setSearchLocation(event.target.value)} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            <div className="up-coming-tour">
                {
                    sort.length > 0 ? updateUpcomingTourData?.reverse().map(upComingTour => <UpComingTour
                        key={upComingTour._id}
                        upComingTour={upComingTour}
                    ></UpComingTour>) : locationData?.reverse().map(upComingTour => <UpComingTour
                        key={upComingTour._id}
                        upComingTour={upComingTour}
                    ></UpComingTour>)
                }
            </div>
        </div>
    );
};

export default UpComingTours;