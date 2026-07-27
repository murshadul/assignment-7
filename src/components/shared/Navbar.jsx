import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoIosTimer, IoMdHome } from 'react-icons/io';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow-md sticky top-0 z-10 bg-slate-50'>
            <div className="container mx-auto flex justify-between p-6">
               
                    <h2 className='text-[#1F2937] font-bold text-2xl'>Keen<span className='text-l text-[#244D3F]'>Keeper</span></h2>
               
                <div className=" flex gap-4">
                   <NavLink className={({isActive})=>`flex items-center gap-2 font-semibold ${isActive?"bg-[#244D3F] text-white p-3 rounded ":""}`} to={'/'}><IoMdHome />Home</NavLink>
                   <NavLink className={({isActive})=>`flex items-center gap-2 font-semibold ${isActive?"bg-[#244D3F] text-white p-3 rounded ":""}`} to={'/timeline'}><IoIosTimer />Timeline</NavLink>
                   <NavLink className={({isActive})=>`flex items-center gap-2 font-semibold ${isActive?"bg-[#244D3F] text-white p-3 rounded ":""}`} to={'/stats'}><ImStatsDots />Stats</NavLink>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;