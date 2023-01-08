import React from 'react';

const Question = ({ qst }) => {
    const { question, options, correctAnswer } = qst;
    return (
        <div className=''>
            <div className='m-auto w-2/4 my-10 bg-slate-200 rounded-2xl drop-shadow-2xl'>
                <div className='flex justify-between'>
                    <p className='text-2xl '> Quiz:  {question}</p>
                    <p className='hidden'>{correctAnswer}</p>
                </div>

                <div className=' text-xl grid grid-cols-2'>
                    <button className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 '>
                        <div><input type="checkbox" checked="checked" className="checkbox" />
                        </div> {options[0]}</button>
                    <button className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 '>
                        <div><input type="checkbox" checked="checked" className="checkbox" />
                        </div> {options[1]}</button>
                    <button className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 '>
                        <div><input type="checkbox" checked="checked" className="checkbox" />
                        </div> {options[2]}</button>
                    <button className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 '>
                        <div><input type="checkbox" checked="checked" className="checkbox" />
                        </div> {options[3]}</button>
                </div>



            </div>
        </div>
    );
};

export default Question;