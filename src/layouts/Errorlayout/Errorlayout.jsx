import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../shared/Navigationbar/Navigation';

const Errorlayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Errorlayout;