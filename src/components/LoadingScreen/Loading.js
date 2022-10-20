import React, { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])
    return (
        <div className='loader'>
            {
                loading ?
                    <PropagateLoader
                        color={"#23CB8B"}
                        loading={loading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    : ''
            }
        </div>
    );
};

export default Loading;