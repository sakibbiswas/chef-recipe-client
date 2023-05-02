import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setcountries(data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h4>ALL countries</h4>
            <div className="ps-4">
                {
                    countries.map(country => <p
                        key={country.id}
                    >
                        <Link to={`/country/${country.id}`} className='text-decoration-none text-black fw-semibold'>{country.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftnav;