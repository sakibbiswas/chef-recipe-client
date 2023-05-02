import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Foodcard from '../foodcard/Foodcard';

const Country = () => {
    const { id } = useParams();
    const countrydata = useLoaderData()
    return (
        <div>
            <h2>this is country {id}</h2>
            {
                countrydata.map(country => <Foodcard
                    key={country._id}
                    country={country}></Foodcard>)
            }
        </div>
    );
};

export default Country;
