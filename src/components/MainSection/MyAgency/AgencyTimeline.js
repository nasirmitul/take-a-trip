import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import SingleAgencyPost from '../Home/SingleAgencyPost';

const AgencyTimeline = () => {

    const { user } = useContext(AuthContext);
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/agency/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            {
                posts.length < 1 ? <div><p className='no-post'>No post yet from your agency</p></div>
                :
                Array.isArray(posts) && posts?.map(post => <SingleAgencyPost
                    key={post._id}
                    post={post}
                ></SingleAgencyPost>).reverse()
            }
        </div>
    );
};

export default AgencyTimeline;