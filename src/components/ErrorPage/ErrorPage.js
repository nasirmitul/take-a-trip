import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <div className="error-message">
                <h1>404 not found</h1>
                <p>Looks like you are in a wrong track</p>

                <Link to='/'>Go to Home</Link>
            </div>

        </div>
    );
};

export default ErrorPage;