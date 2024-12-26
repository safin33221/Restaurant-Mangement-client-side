import axios from "axios";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurBranch = () => {
    const [branchData, setBranchData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/branches')
            .then(res => {
                setBranchData(res.data)
            })
    }, [])
    useEffect(() => {
        AOS.init({ duration: 1500 }); // Adjust duration if needed
    }, []);
   
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center text-3xl font-bold pb-5">Our Branches_</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {
                    branchData.map((branch, idx) =>
                        <div key={idx} className={`bg-green-300 max-w-96 md:w-full  rounded-lg shadow-lg overflow-hidden mx-auto transition-transform transform `}
                            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-offset="-100"
                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"

                            data-aos-anchor-placement="top-center"
                        >

                            
                            <div className="p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {branch.name}
                                </h2>
                                <p className="text-gray-600">
                                    <span className="font-bold">Address:</span> {branch.address}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Phone:</span> {branch.phone}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Email:</span> {branch.email}
                                </p>
                                <div className="mt-4">
                                    <p className="font-bold text-gray-700">Operating Hours:</p>
                                    <ul className="text-gray-600 text-sm list-disc list-inside">
                                        <li>Mon-Fri: {branch.operatingHours.mondayToFriday}</li>
                                        <li>Sat: {branch.operatingHours.saturday}</li>
                                        <li>Sun: {branch.operatingHours.sunday}</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurBranch;