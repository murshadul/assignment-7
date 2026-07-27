import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import useHooks from '../../../hooks/useHooks';

const Banner = () => {
const {friends,loading}=useHooks();

    return (
        <div className='container mx-auto'>
            
            <div className="flex flex-col text-center py-11 space-y-4">
                <h2 className='text-[#1F2937] text-4xl font-bold'>Friends to keep close in your life</h2>
                <p className='font-light'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<button className='btn bg-[#244D3F] font-bold text-white w-[160px] mx-auto'><IoMdAdd />Add a Friend</button>
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 py-10">
<div className="text-center shadow p-5 space-y-2">
    <h2 className='text-xl font-bold'>{friends.length}</h2>
    <p className='font-light'>Total friends</p>
</div>
<div className="text-center shadow p-5 space-y-2">
    <h2 className='text-xl font-bold'>3</h2>
    <p className='font-light'>On Track</p>
</div>
<div className="text-center shadow p-5 space-y-2">
    <h2 className='text-xl font-bold'>6</h2>
    <p className='font-light'>Need Attention</p>
</div>
<div className="text-center shadow p-5 space-y-2">
    <h2 className='text-xl font-bold'>12</h2>
    <p className='font-light'>Interactions This Month</p>
</div>


            </div>
        </div>
    );
};

export default Banner;