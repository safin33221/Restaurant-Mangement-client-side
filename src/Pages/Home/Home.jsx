import React from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import OurBranch from './OurBranch';
import CustomerTestimonials from './CustomerTestimonials';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Banner />

            <TopFoods/>

            <OurBranch/>

            <CustomerTestimonials/>
        </div>
    );
};

export default Home;