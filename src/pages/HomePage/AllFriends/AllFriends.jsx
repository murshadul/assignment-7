import React, { useEffect, useState } from 'react';
import FriendsCard from '../../../ui/FriendsCard/FriendsCard';
import { Commet } from 'react-loading-indicators';
import { ClockLoader } from 'react-spinners';
import useHooks from '../../../hooks/useHooks';



const AllFriends = () => {
 
// console.log(friends,"frienfd")
// console.log(loading,"loading")
const {friends,loading}=useHooks();

    return (
        <div className='container mx-auto pt-6 my-12'>
            
<h2 className='text-2xl font-bold p-6'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                { loading? <div className="w-full col-span-full flex justify-center items-center p-24">
                   <ClockLoader color='#244D3F' />
                </div> :
                friends.map(friend=><FriendsCard key={friend.id} friend={friend}></FriendsCard>)
            }
            </div>
        </div>
    );
};

export default AllFriends;