import React from 'react';
import { Outlet } from 'react-router-dom';

const Errorlayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Errorlayout;