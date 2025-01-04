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
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>

            <Swiper
                className=' mx-auto relative  object-cover bg-cover h-[600px] '
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
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

                {/* <div className=" absolute md:w-1/2  top-12 md:top-24 right-16 md:right-52 bg-black opacity-80 p-5 rounded-lg text-white  z-50 flex flex-col items-center justify-center text-center">
                    <h1 className='font-bold text-xs py-3 md:text-2xl'>
                        WelCome to Our Restaurant
                    </h1>
                    <p className='text-sm hidden md:flex'>
                        Step into a world of delightful flavors and warm hospitality! At our restaurant, we take pride in serving freshly prepared, delicious dishes crafted with the finest ingredients.
                    </p>
                    <Link to='/allFoods' className='btn btn-xs md:btn-sm btn-outline bg-green-400 hover:bg-green-500 hover:text-black ' >
                        All Foods
                    </Link >

                </div> */}
            </Swiper>




        </div>
    );
};

export default Banner;