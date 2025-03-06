import React, { useEffect, useState } from 'react'
import AxiosInstance from '../utils/AxiosInstance';
function NearbyHospital() {
    const [location, setLocation] = useState({ lon: null, lat: null });
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const find = () => {
        setLoading(true)
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newLocation = {
                        lon: position.coords.longitude,
                        lat: position.coords.latitude,
                    };

                    setLocation(newLocation);

                    AxiosInstance.get(`/api/hospital/nearby-hospitals`, {
                        params: {
                            longitude: newLocation.lon,
                            latitude: newLocation.lat
                        }
                    })
                        .then((response) => {
                            setLoading(false)
                            setData(response.data)
                        })
                        .catch((error) => console.error("Error fetching hospitals:", error));
                },
                (error) => {
                    console.error("Geolocation error:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by your browser.");
        }
    }
    console.log(data)
    return (
        <div className='min-h-screen flex justify-center items-center flex-col mt-5 mx-5 md:mx-10'>
            <button onClick={find} className='btn btn-primary mb-4'>
                {
                    loading ? <>Find Nearby Hospitals <span className="loading loading-spinner loading-md"></span></>:"Find Nearby Hospitals"
                }
            </button>
            <div className="w-full overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols min-w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr className="text-left">
                            <th className="p-2"></th>
                            <td className="p-2 font-semibold">Name</td>
                            <td className="p-2 font-semibold">Contact</td>
                            <td className="p-2 font-semibold">Email</td>
                            <td className="p-2 font-semibold">Address</td>
                            <td className="p-2 font-semibold">Blood Availability (Unit)</td>
                            <td className="p-2 font-semibold">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? data.map((d, i) => (
                                <tr key={i} className="border-b border-gray-200">
                                    <th className="p-2">{i + 1}</th>
                                    <td className="p-2 text-xs sm:text-sm font-semibold text-slate-500">{d.name}</td>
                                    <td className="p-2 text-xs sm:text-sm font-semibold text-slate-500">{d.contact}</td>
                                    <td className="p-2 text-xs sm:text-sm font-semibold text-slate-500">{d.email}</td>
                                    <td className="p-2 text-xs sm:text-sm font-semibold text-slate-500">{d.address}</td>
                                    <td className="p-2 text-xs sm:text-sm font-semibold text-red-600">
                                        {`A+ : ${d.bloodAvailability.A_positive}, A- : ${d.bloodAvailability.A_negative}, B+ : ${d.bloodAvailability.B_positive}, B-: ${d.bloodAvailability.B_negative}, AB+ : ${d.bloodAvailability.AB_positive}, AB- : ${d.bloodAvailability.AB_negative}, O+ : ${d.bloodAvailability.O_positive}, O- : ${d.bloodAvailability.O_negative}`}
                                    </td>
                                    <td className="p-2">
                                        <button className="btn btn-success px-3 py-1 text-xs sm:text-sm">Request Blood</button>
                                    </td>
                                </tr>
                            )) :
                                <tr>
                                    <td colSpan="7" className="text-center p-4 text-sm text-gray-500">No Data Found!</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default NearbyHospital