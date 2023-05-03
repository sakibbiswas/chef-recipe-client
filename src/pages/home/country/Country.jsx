import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Foodcard from '../foodcard/Foodcard';

const Country = () => {
    const { id } = useParams();
    const countrydata = useLoaderData()
    return (
        <div>

            {
                countrydata.map(country => <Foodcard
                    key={country._id}
                    country={country}></Foodcard>)
            }
        </div>
    );
};

export default Country;
