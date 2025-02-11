import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';


// import required modules


const CustomerTestimonials = () => {
    const { darktheme } = useContext(authContext)
    return (
        <div className=' mx-auto py-8'>
            <h1 className='text-3xl font-bold text-center  mb-8'> Trusted by Thousands of Happy Customers_</h1>

            <Swiper
                className='w-11/12  mx-auto '
                spaceBetween={20}
               
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 0,
                    stopOnLastSlide: false,
                    pauseOnMouseEnter:true

                }}



                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 slide on mobile screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides on tablets
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides on larger screens
                    },
                }}
            >
                <SwiperSlide>
                    <div

                        className={`max-w-96 border min-h-52  p-6 rounded-lg shadow-md transition-transform transform  `}
                    >

                        <p className={`italic  text-center`}>I had an amazing experience at the Gulshan branch. The staff were very helpful and welcoming. I will definitely be coming back!</p>
                        <p className={`font-bold  text-center mt-4`}>— Raihan Ahmed</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div

                        className={`max-w-96 border h-52  p-6 rounded-lg shadow-md transition-transform transform  `}
                    >

                        <p className={`italic  text-center`}>"Every time I visit, I'm greeted with a warm smile and excellent service. The staff here really know how to make customers feel valued."</p>
                        <p className={`font-bold  text-center mt-4`}>— Shakib Khan</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div

                        className={`max-w-96 border h-52  p-6 rounded-lg shadow-md transition-transform transform  `}
                    >

                        <p className={`italic  text-center`}>I’ve been coming here for years, and I always leave satisfied. The food and service are consistently great!</p>
                        <p className={`font-bold  text-center mt-4`}>— Farhana Sultana</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div

                        className={`max-w-96 border h-52  p-6 rounded-lg shadow-md transition-transform transform  `}
                    >

                        <p className={`italic  text-center`}>I visited the Sylhet branch last week, and I was amazed by the hospitality. The staff is incredibly friendly and attentive.</p>
                        <p className={`font-bold  text-center mt-4`}>— Tariq Rahman</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div

                        className={`max-w-96 border h-52  p-6 rounded-lg shadow-md transition-transform transform  `}
                    >

                        <p className={`italic  text-center`}>Exceptional service at the Baridhara branch! The team is always helpful and makes sure everything is perfect.</p>
                        <p className={`font-bold  text-center mt-4`}>— Zahidul Islam</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div

                        className={`max-w-96 border h-52  p-6 rounded-lg shadow-md transition-transform transform  `}
                    >

                        <p className={`italic  text-center`}>The service at the Banani branch is fantastic! The team always goes above and beyond to ensure a pleasant visit.</p>
                        <p className={`font-bold  text-center mt-4`}>— safin chowdhruy</p>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default CustomerTestimonials;