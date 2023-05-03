import React from 'react';
import Header from '../shared/navbar/Header';
import { Outlet } from 'react-router-dom';

const Loginlayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;