import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import logo from '../../../images/logo.png';

const Search = () => {
    const { user } = useContext(AuthContext);
    const [search, setSearch] = useState([]);
    const [profileActive, setProfileActive] = useState(false);
    const [agencyActive, setAgencyActive] = useState(false);
    const [postActive, setPostActive] = useState(false);


    const handleSearch = (event) => {

        event.preventDefault()
        const form = event.target;
        const search = form.search.value;

        fetch(`https://take-a-trip-server-sigma.vercel.app/search?searchData=${search}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setSearch(data);
                setProfileActive(true)
            })
            .catch(error => console.log(error))
    }

    const handleActive = (value) => {
        console.log(value);
        if (value === 'profile') {
            setProfileActive(true)
            setAgencyActive(false)
            setPostActive(false)
        }
        if (value === 'agency') {
            setProfileActive(false)
            setAgencyActive(true)
            setPostActive(false)
        }
        if (value === 'posts') {
            setProfileActive(false)
            setAgencyActive(false)
            setPostActive(true)
        }
    }

    return (
        <div className='container'>
            <div className="search-data">
                <div className="search-nav">
                    <Link to='/'><img className='logo' src={logo} alt="" /></Link>
                    <div className="search-bar">
                        <form action="" onSubmit={handleSearch}>
                            <input className='search' type="text" name="search" id="" placeholder='search' required />
                            <button className='search-button' type="submit">Search</button>
                        </form>
                    </div>
                    <Link className='cancel' to='/'>Cancel</Link>
                </div>
            </div>

            <div className='search-info'>
                <div>
                    <ul className="tabs mt-3 d-flex">
                        <li className={`${profileActive && 'active'}`} onClick={() => handleActive('profile')}>Profile <span>{search.length > 0 && search.length}</span></li>
                        <li className={`${agencyActive && 'active'}`} onClick={() => handleActive('agency')}>Agency</li>
                        <li className={`${postActive && 'active'}`} onClick={() => handleActive('posts')}>Posts</li>
                    </ul>
                    <hr />
                    <div className='search-result'>
                        {
                            search.map(s =>
                                <div key={s._id} className="profile-view d-flex align-items-center">
                                    <div className="profile-image">
                                        <Link to={`${user?.email === s.email ? `/profile/timeline` : `/user/${s.email}`}`}><img src={s.profile} alt="" /></Link>
                                    </div>
                                    <div className='profile-data'>
                                        <Link to={`${user?.email === s.email ? `/profile/timeline` : `/user/${s.email}`}`}><h6 className="profile-name">{s.name}</h6></Link>
                                        <small className='profile-info'>{s.followers.length} followers <span>.</span> {s.following.length} following</small>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;