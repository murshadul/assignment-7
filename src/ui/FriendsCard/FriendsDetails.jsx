import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useHooks from '../../hooks/useHooks';
import { ClockLoader } from 'react-spinners';
import Tags from '../Tags/Tags';
import { MdDelete } from 'react-icons/md';
import { FaArchive, FaSnowflake, FaVideo } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import { ShowContext } from '../../context/ShowContext';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
const {call,setCall,text,setText,video,setVideo}=useContext(ShowContext);
const handleCallClick=(expectedFriends)=>{
    setCall([...call,expectedFriends]);
    toast.success(`${expectedFriends.name} is called`);
}
const handleTextClick=(expectedFriends)=>{
    setText([...text,expectedFriends]);
    toast.success(`${expectedFriends.name} is texted`);
}
const handleVideoClick=(expectedFriends)=>{
    setVideo([...video,expectedFriends]);
    toast.success(`${expectedFriends.name} is video called`);
}

// console.log(call,"Call")
// console.log(text,"Call")
// console.log(video,"Call")

    const {id}=useParams();
    const {friends,loading}=useHooks();
    const expectedFriends=friends.find(friend=>String(friend.id)===id)
    console.log(expectedFriends,"ExpectedFriends");
    // console.log(id,"Params");
    if (loading) {
        return <div className="w-full col-span-full flex justify-center items-center p-24">
                   <ClockLoader color='#244D3F' />
                </div>;
    }
    return (
        <div className='container mx-auto py-10'>
          <div className=" grid md:grid-cols-2 text-center space-y-3 gap-4">
<div className="">
<div className=" space-y-2">
    <img src={expectedFriends.picture} className='w-[60px] rounded-full mx-auto' alt={expectedFriends.name} />
<div className="flex flex-col">
    {expectedFriends.tags.map((tag,ind)=><Tags tag={tag} key={ind}></Tags>)

}
</div>



<p>Preffered : {expectedFriends.email}</p>

</div>
<button className='btn mb-2.5 w-full mt-3.5'><FaSnowflake />snooze {expectedFriends.days_since_contact} weeks ago </button> <br />
<button className='btn mb-2.5 w-full'><FaArchive />Archieve</button> <br />
<button className='btn mb-2.5 text-red-600 w-full'><MdDelete />Delete</button>
</div>
<div className="">
<div className="grid md:grid-cols-3 gap-3">
    <div className="text-center shadow p-3">
<h2 className='font-bold text-2xl'>62</h2>
<p className='font-light'>Days Since Contact</p>
</div>
<div className="text-center shadow p-3">
<h2 className='font-bold text-2xl'>30</h2>
<p className='font-light'>Goal (Days)</p>
</div>
<div className="text-center shadow p-3">
<h2 className='font-bold text-2xl'>Feb 27, 2026</h2>
<p className='font-light'>Next Due</p>
</div>
</div>
<div className=" shadow">
   <div className="flex gap-1 justify-between my-3">
     <button className='btn  w-3/4 '>Relationship Goal</button>
    <button className='btn'>Edit</button>

   </div>

   <h2 className='font-light text-start'>Connect every 30 days</h2>


</div>
<div className=" pt-2 shadow mt-5">
    <h2 className='text-2xl font-bold text-start'>Quick Check-In</h2>
    <div className="grid md:grid-cols-3 my-3 gap-3">
        <div onClick={()=>handleCallClick(expectedFriends)} className="flex flex-col text-center shadow p-3">
        <p className='flex justify-center items-center'><IoCallSharp /></p>
        <h2>Call</h2>
    </div>
    <div onClick={()=>handleTextClick(expectedFriends)} className="flex flex-col text-center shadow p-3">
        <p className='flex justify-center items-center'><IoMdText /></p>
        <h2>Text</h2>
    </div>
    <div onClick={()=>handleVideoClick(expectedFriends)} className="flex flex-col text-center shadow p-3">
        <p className='flex justify-center items-center'><FaVideo /></p>
        <h2>Video</h2>
    </div>
    </div>
</div>
</div>

          </div>
        </div>
    );
};

export default FriendsDetails;