import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AxiosInstance from '../utils/AxiosInstance'
import {handleSuccess} from '../utils/ReactToast'
// import {Navigate} from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        password:"",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    }, []);
    //   console.log(location)
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const hospitalData = {
            name: formData.name,
            email: formData.email,
            password:formData.password,
            contact: formData.contact,
            address: formData.address,
            location: {
                type: "Point",
                coordinates: [parseFloat(location.lon), parseFloat(location.lat)],
            },
        };

        AxiosInstance.post("/api/hospital/register", hospitalData)
        .then((d)=>{
            setLoading(false);
            handleSuccess(d.data.message)
            navigate('/login')
        })
        .catch((e)=>{
            setLoading(false)
            console.log(e)
        })
        // console.log(hospitalData)
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset w-xs md:w-[350px]  h-auto bg-base-200 border border-base-300 p-4 rounded-box">
                        <legend className="fieldset-legend">Hospital Registration</legend>

                        <label className="fieldset-label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Hospital Name" required value={formData.name} onChange={handleChange} />

                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Hospital Email" required value={formData.email} onChange={handleChange} />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Hospital Password" required value={formData.password} onChange={handleChange} />

                        <label className="fieldset-label">Contact</label>
                        <input type="text" name='contact' className="input" placeholder="Hospital Contact No." required value={formData.contact} onChange={handleChange} />

                        <label className="fieldset-label">Address</label>
                        <textarea name="address" className='textarea' required placeholder='Hospital Full Address' value={formData.address} onChange={handleChange}></textarea>
                        {/* <input type="text" className="input" placeholder="Hospital Address"/> */}

                        <button className="btn bg-primary mt-4" type='submit'>
                            {
                                loading ? <span className="loading loading-spinner loading-md"></span> :" Register Now"
                            }
                        </button>
                        <br />
                        <p className='font-medium text-md'>Already have an account ?<Link to='/login' className='text-primary'>Login Here</Link></p>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Register