import React from 'react';
const promotions = [
    {
        title: "Buy 1 Get 1 Free – Selected Dishes!",
        details: "Order any main course & get another of equal value FREE!",
        availability: "12 PM – 3 PM & 7 PM – 10 PM"
    },
    {
        title: "Combo Meals – 20% OFF",
        details: "Get a Burger + Fries + Drink at only $9.99!",
        availability: "Every day from 11 AM – 6 PM"
    },
    {
        title: "Weekend Special – Flat 30% OFF on Pizzas",
        details: "Fridays & Saturdays only – Discount applies automatically.",
        availability: "Dine-in & Takeaway available"
    }
];
const Offer = () => {
    return (
        <div className='px-10'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-8'> Special Offers – Limited Time Only! </h1>

                <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {promotions.map((promo, index) => (
                        <div className=" rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl border">
                            <div className="p-5 relative min-h-60">
                                <h3 className="text-xl font-bold ">{promo.title}</h3>
                                <p className="">{promo.details}</p>
                                <p className=" font-medium mt-3">{promo.availability}</p>
                                <button className="mt-4 px-4 py-2 btn   btn-outline hover:bg-gray-100 hover:text-black    duration-400 ease-in-out absolute bottom-4   transition">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offer;