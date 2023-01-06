import React, { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Processing = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])
    return (
        <div className='processing'>

            <div className="processing-loader">
                {
                    loading &&
                    <PropagateLoader
                        color={"#23CB8B"}
                        loading={loading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                }
            </div>

        </div>
    );
};

export default Processing;