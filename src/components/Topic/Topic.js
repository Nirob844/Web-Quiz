import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div className='border-solid rounded-lg border-white p-8 m-4 bg-slate-200 drop-shadow-2xl'>
            <img src={logo} alt="" />
            <h1 className='text-xl mt-2'>Topic : {name}</h1>
            <Link to={`../topic/${id}`}>
                <button className='border-solid rounded bg-blue-500 px-4 py-2 mt-2'>Start Practice</button>
            </Link>
            <p className='mt-2'>Total Question : {total}</p>


        </div>
    );
};

export default Topic;