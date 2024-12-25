import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import slid1 from '../../assets/Banner/1.png'
import slid2 from '../../assets/Banner/2.png'
import slid3 from '../../assets/Banner/3.png'
import slid4 from '../../assets/Banner/4.png'
import slid5 from '../../assets/Banner/5.png'
import slid6 from '../../assets/Banner/6.png'
import slid7 from '../../assets/Banner/7.png'
import slid8 from '../../assets/Banner/8.png'
import slid9 from '../../assets/Banner/9.png'
import slid10 from '../../assets/Banner/8.png'

const Banner = () => {
    return (
        <div className='py-12 relative '>
            {/* <img src={slid1} alt="" /> */}
            <Swiper
                className='w-11/12 md:w-7/12 mx-auto  '
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >
                <SwiperSlide><img src={slid1} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid2} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid3} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid4} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid5} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid6} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid7} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid8} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid9} alt="Loading" /></SwiperSlide>
                <SwiperSlide><img src={slid10} alt="loading" /></SwiperSlide>
            </Swiper>


            {/* <div className=" absolute w-1/2 top-40 bg-black opacity-50 p-5 rounded-lg text-white left-80 z-50 flex flex-col items-center justify-center text-center">
                <h1 className='font-bold text-3xl'>
                    WelCome to Our Restaurant 
                </h1>
                <p>
                Step into a world of delightful flavors and warm hospitality! At our restaurant, we take pride in serving freshly prepared, delicious dishes crafted with the finest ingredients. Whether you're here for a casual meal, a special occasion, or just to enjoy good company, our welcoming atmosphere and attentive service will ensure an unforgettable dining experience. Sit back, relax, and savor every bite – your culinary journey starts here!
                </p>
                <button className='btn btn-outline bg-green-400 hover:bg-green-500 hover:text-black ' >
                    All Foods
                </button>
                <div></div>
            </div> */}

        </div>
    );
};

export default Banner;