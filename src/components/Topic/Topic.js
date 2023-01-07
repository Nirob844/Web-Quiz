import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <div>
            <h1>{logo}</h1>
            <h1>{name}</h1>
            <p>{total}</p>
        </div>
    );
};

export default Topic;