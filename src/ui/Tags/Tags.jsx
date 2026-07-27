import React from 'react';

const Tags = ({tag}) => {
    return (
        <div>
           <div className="badge badge-soft badge-success">{tag}</div>
        </div>
    );
};

export default Tags;