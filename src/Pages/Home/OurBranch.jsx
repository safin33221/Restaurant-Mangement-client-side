import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authContext } from "../../Provider/AuthProvider";

const OurBranch = () => {
    const {darktheme} = useContext(authContext)
    const [branchData, setBranchData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/branches')
            .then(res => {
                setBranchData(res.data)
            })
    }, [])
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Adjust duration if needed
    }, []);
   
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center text-3xl font-bold pb-5">Our Branches_</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {
                    branchData.map((branch, idx) =>
                        <div key={idx} className={`w-11/12 md:w-full mx-auto     focus:border-green-600 rounded-xl overflow-hidden hover:shadow-2xl  hover:scale-[1.03] transition-all  duration-300  shadow-2xl  border`}
                            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-offset="-100"
                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"

                            data-aos-anchor-placement="top-center"
                        >

                            
                            <div className="p-6 flex flex-col justify-between">
                                <h2 className="text-2xl font-semibold  mb-2">
                                    {branch.name}
                                </h2>
                                <p className="">
                                    <span className="font-bold">Address:</span> {branch.address}
                                </p>
                                <p className="">
                                    <span className="font-bold">Phone:</span> {branch.phone}
                                </p>
                                <p className="">
                                    <span className="font-bold">Email:</span> {branch.email}
                                </p>
                                <div className="mt-4">
                                    <p className="font-bold ">Operating Hours:</p>
                                    <ul className=" text-sm list-disc list-inside">
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