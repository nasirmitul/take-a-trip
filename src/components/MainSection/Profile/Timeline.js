import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import SingleUserPost from '../Home/SingleUserPost';

const Timeline = () => {
    const { user } = useContext(AuthContext);


    
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/posts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            {
                Array.isArray(posts) && posts?.map(post => <SingleUserPost
                    key={post._id}
                    post={post}
                ></SingleUserPost>)
            }
        </div>
    );
};

export default Timeline;