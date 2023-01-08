import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, } = topic
    return (
        <div className='border-solid rounded-lg border-white p-8 m-4 bg-slate-200 drop-shadow-2xl'>
            <img src={logo} alt="" />
            <div className='flex justify-between mt-6 drop-shadow-2xl bg-slate-150 rounded-xl py-2 px-1'>
                <h1 className='text-xl'>{name}</h1>
                <Link to={`../topic/${id}`}>
                    <button className='border-solid rounded bg-blue-500 px-4 py-2'>Start Practice</button>
                </Link>

            </div>

        </div>
    );
};

export default Topic;