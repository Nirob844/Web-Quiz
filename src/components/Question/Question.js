import React from 'react';

const Question = ({ qst }) => {
    const { question, options, correctAnswer } = qst;
    return (
        <div className='border-solid border-blue-700 m-5 p-5'>
            <p className='text-xl '> Quiz:  {question}</p>

            <div className='grid gap-5 grid-cols-2'>
                <div className=' text-xl'>
                    <p className=''>{options}</p>
                </div>
            </div>
            {/* <p>{correctAnswer}</p> */}

        </div>
    );
};

export default Question;