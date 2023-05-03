import React from 'react';
import img1 from '../../../public/assets/berries-2277__340.jpg'
import img2 from '../../../public/assets/macarons-2548827__340.jpg'
import img3 from '../../../public/assets/spaghetti-1932466__340.jpg'
import img4 from '../../../public/assets/Good_Food_Display_-_NCI_Visuals_Online.jpg'
import img5 from '../../../public/assets/p04tx3m6.jpg'
import img6 from '../../../public/assets/top-view-table-full-delicious-food-composition_23-2149141353.avif'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Foodpic = () => {
    return (
        <div className=' text-center'>
            <h4>Food-Zone</h4>
            <div className='mb-6'>
                <LazyLoadImage effect="blur" delayTime='400' className='mb-3' style={{ width: '300px' }} src={img1} alt="" />
                <LazyLoadImage effect="blur" delayTime={400} className='mb-3' style={{ width: '300px' }} src={img2} alt="" />
                <LazyLoadImage effect="blur" delayTime={400} className='mb-3' style={{ width: '300px' }} src={img3} alt="" />
                <LazyLoadImage effect="blur" delayTime={400} className='mb-3' style={{ width: '300px' }} src={img4} alt="" />
                <LazyLoadImage effect="blur" delayTime={400} className='mb-3' style={{ width: '300px' }} src={img5} alt="" />
                <LazyLoadImage effect="blur" delayTime={400} style={{ width: '300px' }} src={img6} alt="" />
            </div>

        </div>
    );
};

export default Foodpic;