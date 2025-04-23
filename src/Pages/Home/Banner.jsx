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
const slides = [slid1, slid2, slid3, slid4, slid5, slid6, slid7, slid8, slid9, slid10];


const Banner = () => {
    return (
        <div className=''>

            <Swiper
                className=' md:h-[500px] object-cover w-full   '
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
                style={{zIndex:'0'}}

            >
                {
                    slides.map((slid, idx) => < SwiperSlide key={idx}><img src={slid} alt={'Loading'} className='w-full md:h-[500px]  md:bg-contain' /></SwiperSlide>)
                }



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