import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AxiosInstance from '../utils/AxiosInstance'
import {handleSuccess} from '../utils/ReactToast'
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [loading,setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit=(e)=>{
        setLoading(true)
        e.preventDefault();
        const hospitalData = {
            email: formData.email,
            password:formData.password,
        };

        AxiosInstance.post("/api/hospital/login", hospitalData)
        .then((d)=>{
            setLoading(false)
            handleSuccess("Login Sucessfully!")
            console.log(d.data)
            localStorage.setItem("token",d.data.token)
            navigate('/dashboard')
        })
        .catch((e)=>{
            setLoading(false)
            console.log(e)
        })
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset w-xs md:w-[350px] h-[300px] bg-base-200 border border-base-300 p-4 rounded-box">
                        <legend className="fieldset-legend">Hospital Login</legend>

                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required onChange={handleChange}  value={formData.email}/>

                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required onChange={handleChange} value={formData.password}/>

                        <button className="btn bg-primary mt-4" type='submit'>
                            {
                                loading ? <span className="loading loading-spinner loading-md"></span> : "Login Now"
                            }
                        </button>
                        <br />
                        <p className='font-medium text-md'>Don't have an account ?<Link to='/register' className='text-primary'>Register Here</Link></p>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Login