import React from 'react';
import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';
import { FaRegHandshake, FaVideo } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';

const TimeLine = () => {
    const {call,text,video}=useContext(ShowContext);
    console.log(call,"ContextData");
    return (
        <div className='container mx-auto my-12 space-y-4'>
        {call.length === 0 && text.length === 0 && video.length === 0 ? <h2 className='text-4xl font-bold text-center py-14'>No one is called,text,video</h2> :
            call.map((cl,ind)=>{
                return <div className='flex gap-8 items-center shadow p-6 ' key={ind}>
<p><FaRegHandshake className='text-yellow-400 text-5xl font-bold' /></p>
<div className="">
    <h2 className='text-xl font-bold'>Meetup with {cl.name}</h2>
    <p className='font-bold'>On {cl.next_due_date}</p>
</div>
                </div>
})
        }  
        {
            text.map((tx,ind)=>{
                return <div className='flex gap-8 items-center shadow p-6 ' key={ind}>
<p><IoIosText className='text-gray-400 text-5xl font-bold' /></p>
<div className="">
    <h2 className='text-xl font-bold'>Text with {tx.name}</h2>
    <p className='font-bold'>On {tx.next_due_date}</p>
</div>
                </div>
})
        }  
        {
            video.map((vd,ind)=>{
                return <div className='flex gap-8 items-center shadow p-6 ' key={ind}>
<p><FaVideo className='text-black-400 text-5xl font-bold' /></p>
<div className="">
    <h2 className='text-xl font-bold'>Video with {vd.name}</h2>
    <p className='font-bold'>On {vd.next_due_date}</p>
</div>
                </div>
})
        }  
        </div>
    );
};

export default TimeLine;