import React from 'react';
import img1 from '../../../public/assets/berries-2277__340.jpg'
import img2 from '../../../public/assets/macarons-2548827__340.jpg'
import img3 from '../../../public/assets/spaghetti-1932466__340.jpg'

const Foodpic = () => {
    return (
        <div className=' text-center'>
            <h4>Food-Zone</h4>
            <div className='mb-6'>
                <img className='mb-3' style={{ width: '300px' }} src={img1} alt="" />
                <img className='mb-3' style={{ width: '300px' }} src={img2} alt="" />
                <img style={{ width: '300px' }} src={img3} alt="" />
            </div>

        </div>
    );
};

export default Foodpic;