import React from 'react'

function Navbar() {
    return (
        <div className="navbar bg-base-200 shadow-sm px-2 md:px-5">
            <div className="flex-1">
                <a className="text-xl font-semibold cursor-pointer"><span className='text-red-600'>Red</span>Link</a>
            </div>

            <div className="flex gap-3">
                <input type="text" placeholder="Search hospitals, blood group" className="input input-bordered w-52 md:w-80" />
                <button className='btn bg-primary px-8 hidden md:block'>Login</button>
                <div className="dropdown dropdown-end">
                    
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>

                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-4 shadow gap-2">
                        <li><a className='py-2'>Find Nearby</a></li>
                        <li><a className='py-2'>Donate Blood</a></li>
                        <li><a className='py-2'>Request for blood</a></li>
                        <hr />
                        {/* <br /> */}
                        <li><button className='btn bg-primary'>Login</button></li>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default Navbar