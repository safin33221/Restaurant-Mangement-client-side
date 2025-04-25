
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";




import item1 from '../../assets/FoodGalley/Fooditem/1.png'
import item2 from '../../assets/FoodGalley/Fooditem/2.png'
import item3 from '../../assets/FoodGalley/Fooditem/3.png'
import item4 from '../../assets/FoodGalley/Fooditem/4.png'
import item5 from '../../assets/FoodGalley/Fooditem/5.png'
import item6 from '../../assets/FoodGalley/Fooditem/6.png'
import item7 from '../../assets/FoodGalley/Fooditem/7.png'
import item8 from '../../assets/FoodGalley/Fooditem/8.png'
import item9 from '../../assets/FoodGalley/Fooditem/9.png'
import item10 from '../../assets/FoodGalley/Fooditem/10.png'
import item11 from '../../assets/FoodGalley/Fooditem/11.png'
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const photos = [
    { src: item1,  width: 200, height: 240, title: "Delicious Food", description: "Juicy grilled skewers with fresh tomato and dipping sauce." },
    { src: item2,  width: 200, height: 240, title: "Delicious Food", description: "Juicy grilled skewers with fresh tomato and dipping sauce." },
    { src: item3,  width: 200, height: 240, title: "Exotic Cuisine", description: "Fresh herbs and bold spices for a culinary masterpiece." },
    { src: item4,  width: 200, height: 240, title: "Healthy Salad", description: "Crisp greens with a light vinaigrette." },
    { src: item5,  width: 200, height: 240, title: "Dessert Bliss", description: "Rich chocolate and whipped cream." },
    { src: item6,  width: 200, height: 240, title: "Tropical Delight", description: "Fresh fruits and tropical flavors." },
    { src: item7,  width: 200, height: 240, title: "Seafood Special", description: "Grilled prawns with a lemon butter sauce." },
    { src: item8,  width: 200, height: 240, title: "Comfort Food", description: "Warm and hearty dishes for cold days." },
    { src: item9,  width: 200, height: 240, title: "Gourmet Platter", description: "Artisanal cheeses and fresh produce." },
    { src: item10, width: 200, height: 240, title: "Classic Burger", description: "Juicy patty with fresh toppings." },
    { src: item11, width: 200, height: 240, title: "Classic Burger", description: "Juicy patty with fresh toppings." },
];
const Gallery = () => {
    const [index, setIndex] = useState(false);





    return (


        <div className="" >
            <Helmet><title>Master Chef || Gallery</title></Helmet>
            <div className="bg-[url('/src/assets/FoodGalley/banner.png')] h-1/2  md:h-[400px]  mx-auto bg-cover object-contain mb-2 flex justify-center items-center object-center overflow-hidden">

                <div className=' text-center w-4/5 md:w-1/2 '>
                    <h1 className='text-[#ffc700] font-bold text-3xl'>Our Food Gallery</h1>
                    <p className='text-[#ffc700] font-bold text-sm opacity-70 my-10'>Dive into a selection of delectable dishes, each beautifully displayed with a title and description to give you a taste of what's to come. From vibrant salads to hearty main courses, each image tells a story of culinary excellence.</p>
                </div>
            </div>

            <div className='w-11/12 mx-auto py-10'>

                <RowsPhotoAlbum
                    photos={photos}
                    layout="rows"
                    
                    onClick={({ index: currentIndex }) => setIndex(currentIndex )} // open lightbox
                />


                {/* <div className="w-11/12 mx-auto grid grid-cols-12 gap-4">
                    {photos.map((photo, idx) => (
                        <div key={idx} className='col-span-12 md:col-span-4 h-full relative group'>
                        
                            <img className='h-60 bg-cover object-center w-full' src={photo.src} alt="" />

                     
                            <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <h3 className="text-white text-xl font-semibold mb-2">{photo.title}</h3>
                                <p className="text-gray-300 text-sm text-center">
                                    {photo.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}


                <Lightbox
                    index={index}

                    slides={photos}
                    open={index >= true}
                    close={() => setIndex(false)}
                />
            </div>





        </div>
    );
};

export default Gallery;