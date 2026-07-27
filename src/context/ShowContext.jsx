import React, { createContext, useState } from 'react';
export const ShowContext=createContext();
const ShowContextProvider = ({children}) => {
const [call,setCall]=useState([]);
const [text,setText]=useState([]);
const [video,setVideo]=useState([]);

    const data={
call,setCall,text,setText,video,setVideo
    }
    return (
       <ShowContext.Provider value={data}>{children}</ShowContext.Provider>
    );
};

export default ShowContextProvider;