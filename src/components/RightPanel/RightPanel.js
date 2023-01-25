/* import React, { useEffect, useState } from 'react';
import UpComingTour from '../MainSection/UpComingTours/UpComingTour';



const RightPanel = () => {

    const [upComingTours, setUpComingTours] = useState([]);
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/rightUpcomingTours')
            .then(res => res.json())
            .then(data => {
                console.log('upComingTours', upComingTours);
                setUpComingTours(data)
            })
    }, []);



    return (
        <div className='right-panel'>
            <div className="section-title">
                <p>Upcoming Tours for you</p>
            </div>
            {
                upComingTours?.map(upComingTour => <UpComingTour
                    key={upComingTour._id}
                    upComingTour={upComingTour}
                ></UpComingTour>)
            }
        </div>
    );
};

export default RightPanel; */
import React, { useEffect, useState } from 'react';
import UpComingTour from '../MainSection/UpComingTours/UpComingTour';

const RightPanel = () => {

    const [upcomingTours, setUpComingTours] = useState([])
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/rightUpcomingTours')
        .then(res => res.json())
        .then(data => {
            console.log('dataaaaaaa', data.upComingTourData);
            setUpComingTours(data.upComingTourData)
        })
    }, [])

    return (
        <div className='right-panel'>
            <div className="section-title">
                <p>Upcoming Tours for you</p>
            </div>
            {
                upcomingTours.map(upcomingTour => <UpComingTour key={upcomingTour._id} upComingTour={upcomingTour}></UpComingTour>)
            }
        </div>
    );
};

export default RightPanel;