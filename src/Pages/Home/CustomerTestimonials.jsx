import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react';
import axios from 'axios';



// import required modules


const CustomerTestimonials = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        axios.get('https://restaurant-management-server-side-wheat.vercel.app/feedback')
            .then(res => {
                setFeedback(res.data)
            })
    }, [])


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
                    pauseOnMouseEnter: true

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
                {
                    feedback?.map(item => <SwiperSlide key={item._id}>
                        <div

                            className={`max-w-96 mx-auto border min-h-52  p-6 rounded-xl shadow-md transition-transform transform  `}
                        >

                            <p className={`italic  text-center`}>"{item.message}"</p>
                            <p className={`font-bold  text-center mt-4`}>— {item.name}</p>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>

        </div>
    );
};

export default CustomerTestimonials;