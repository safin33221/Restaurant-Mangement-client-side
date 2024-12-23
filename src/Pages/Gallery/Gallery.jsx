import item2 from '../../assets/FoodGalley/Fooditem/2.png'
import item3 from '../../assets/FoodGalley/Fooditem/3.png'
import item4 from '../../assets/FoodGalley/Fooditem/4.png'
import item5 from '../../assets/FoodGalley/Fooditem/5.png'
import item6 from '../../assets/FoodGalley/Fooditem/6.png'
import item7 from '../../assets/FoodGalley/Fooditem/7.png'
import item8 from '../../assets/FoodGalley/Fooditem/8.png'
import item9 from '../../assets/FoodGalley/Fooditem/9.png'
import item10 from '../../assets/FoodGalley/Fooditem/10.png'
const Gallery = () => {
   
    return (
        
        <div className=''>
            <div className="bg-[url('/src/assets/FoodGalley/banner.png')]  min-h-screen  mx-auto bg-cover object-contain mb-2 flex justify-center items-center rounded-b-lg object-center overflow-hidden">

                <div className=' '>
                    <h1 className='text-[#ffc700] font-bold text-3xl'>WellCome To Our Food Gallery</h1>
                </div>
            </div>

            <div className='my-10 w-11/12 mx-auto'>
                <h1 className='text-center text-3xl font-bold'>See our Foods</h1>
                <div className='grid grid-cols-12 gap-2'>


                    <div className="col-span-8 h-60 relative group">
                        <img
                            className="h-60 object-cover object-center w-full"
                            src={item2}
                            alt="Delicious Food"
                        />
                        <div
                            className="absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                Savor the authentic flavors of Mexican-inspired cuisine! These golden, crispy rolled tortillas are filled with rich, flavorful ingredients, perfectly complemented by a side of fresh vegetables, spicy chili, and creamy dips. A fiesta for your taste buds awaits! Buy now to enjoy!
                            </p>
                        </div>
                    </div>


                    <div className='col-span-4 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item3} alt="" />

                        {/* constent overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                Delight in a vibrant medley of grilled vegetables, including zucchini, bell peppers, and more, perfectly charred to enhance their natural sweetness. Paired with savory sausages and a juicy corn cob, this dish brings together a harmonious balance of flavors and textures. Ideal for a wholesome, hearty meal
                            </p>
                        </div>
                    </div>



                    <div className='col-span-6 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item4} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                Sink your teeth into these perfectly grilled skewers of tender, juicy meat, seasoned to perfection and charred for a smoky flavor. Accompanied by fresh tomato and a tangy dipping sauce, this dish is a feast for your senses and a perfect choice for any barbecue lover!
                            </p>
                        </div>
                    </div>


                    <div className='col-span-6 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item5} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                This is a short description of the food item. Buy now to enjoy!
                            </p>
                        </div>
                    </div>


                    <div className='col-span-4 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item6} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                This is a short description of the food item. Buy now to enjoy!
                            </p>
                        </div>
                    </div>
                    <div className='col-span-4 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item7} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                This is a short description of the food item. Buy now to enjoy!
                            </p>
                        </div>
                    </div>
                    <div className='col-span-4 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item8} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                This is a short description of the food item. Buy now to enjoy!
                            </p>
                        </div>
                    </div>
                    <div className='col-span-4 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item9} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                This is a short description of the food item. Buy now to enjoy!
                            </p>
                        </div>
                    </div>
                    <div className='col-span-8 h-full relative group'>
                        {/* image */}
                        <img className='h-60 bg-cover object-center w-full' src={item10} alt="" />

                        {/* content overlay */}
                        <div className='absolute inset-0 z-40 bg-black bg-opacity-60 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <h3 className="text-white text-xl font-semibold mb-2">Delicious Food</h3>
                            <p className="text-gray-300 text-sm text-center">
                                This is a short description of the food item. Buy now to enjoy!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;