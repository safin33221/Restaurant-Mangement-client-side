import React from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import OurBranch from './OurBranch';
import CustomerTestimonials from './CustomerTestimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Helmet><title>Master Chef || Home</title></Helmet>
            <Banner />

            <TopFoods/>

            <OurBranch/>

            <CustomerTestimonials/>
        </div>
    );
};

export default Home;