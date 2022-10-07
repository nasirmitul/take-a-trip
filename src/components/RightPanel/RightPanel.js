import React, { useEffect, useState } from 'react';
import UpComingTour from '../MainSection/UpComingTours/UpComingTour';



const RightPanel = () => {

    /* const [upComingTour, setUpComingTour] = useState([]);
    useEffect(() => {
        fetch('JSON/fakeUpComingTours.json')
            .then(res => res.json())
            .then(data => setUpComingTour(data))
    }, []);
 */


    return (
        <div className='right-panel'>
            <div className="section-title">
                <p>Upcoming Tours for you</p>
            </div>
            <UpComingTour></UpComingTour>
            <UpComingTour></UpComingTour>
        </div>
    );
};

export default RightPanel;