import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import SingleUserPost from '../Home/SingleUserPost';

const Timeline = () => {
    const { user } = useContext(AuthContext);
    const [refetch, setRefetch] = useState(false);



    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/posts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);
            })
    }, [refetch])

    const handleRefetch = () => {
        setRefetch(!refetch);
    }

    return (
        <div>
            {
                posts.length <= 0 && <p className='no-recent-event'>You haven't post anything yet</p>
            }
            {
                Array.isArray(posts) && posts?.map(post => <SingleUserPost
                    key={post._id}
                    post={post}
                    handleRefetch={handleRefetch}
                ></SingleUserPost>)
            }
        </div>
    );
};

export default Timeline;