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
        <div className='py-12 -z-40'>
            {/* <img src={slid1} alt="" /> */}
            <Swiper
                className='w-7/12 mx-auto relative  '
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

        </div>
    );
};

export default Banner;