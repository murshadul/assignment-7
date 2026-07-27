import React from 'react';
import Tags from '../Tags/Tags';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
    // console.log(friend,"friend");
    const {name,picture,days_since_contact,tags,id}=friend;
    return (
        <div>
            <Link to={`/${id}`} className="card shadow text-center p-5 space-y-2">
                <img className='rounded-full w-[110px] mx-auto' src={picture} alt="" />
                <h2 className='font-bold'>{name}</h2> 
                <p className='font-light text-l'>{days_since_contact}d ago</p>
               <div className="flex mx-auto gap-2">
                 {
                    tags.map((tag,ind)=><Tags key={ind} tag={tag}></Tags>)
                }
               </div>
            </Link>
        </div>
    );
};

export default FriendsCard;