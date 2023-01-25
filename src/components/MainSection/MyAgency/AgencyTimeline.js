import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import SingleAgencyPost from '../Home/SingleAgencyPost';

const AgencyTimeline = () => {

    const { user } = useContext(AuthContext);
    const [agency, setAgency] = useState({});
    const [refetch, setRefetch] = useState(false);
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);
            })
    }, [refetch])

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/createAgency?agencyEmail=${user.email}`)
            .then(res => {
                return res.json()
            })
            .then(data => setAgency(data))
    }, [])

    const handleRefetch = () => {
        setRefetch(!refetch);
    }
    return (
        <div>

            {
                agency[0]?.verified &&
                <>
                    {
                        posts.length < 1 ? <div><p className='no-post'>No post yet from your agency</p></div>
                            :
                            Array.isArray(posts) && posts?.map(post => <SingleAgencyPost
                                key={post._id}
                                post={post}
                                handleRefetch={handleRefetch}
                            ></SingleAgencyPost>).reverse()
                    }
                </>

            }

        </div>
    );
};

export default AgencyTimeline;