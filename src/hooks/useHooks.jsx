import React, { useEffect, useState } from 'react';

const useHooks = () => {
   const [loading,setLoading]=useState(true)
    const [friends,setFriends]=useState([])
useEffect(()=>{
 const Friends=async()=>{
const res=await fetch('/Data.json');
const data= await res.json();
// console.log(data,"Data");
setTimeout(()=>{
    
    setFriends(data);
setLoading(false);
},2000)
 };
 Friends();
},[])

    return {loading,friends};
    
};

export default useHooks;