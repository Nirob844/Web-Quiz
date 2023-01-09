import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ({ qst }) => {
    const { question, options, correctAnswer, } = qst;
    const handelCheckBox = () => {
        const correct = correctAnswer;
        const option = options.find(opt => opt === correct);
        if (option) {
            console.log(option)
            alert("right");
            const notify = () => toast("Wow so easy!");
        }
        else if (!option) {
            console.log(option)
            const notify = () => toast("Wrong answer")
            alert("wrong");


        }
    }

    return (
        <div className=''>
            <div className='m-auto w-2/4 my-10 bg-slate-200 rounded-2xl drop-shadow-2xl'>
                <div className='flex justify-between'>
                    <p className='text-2xl mb-2 '> Quiz: {question}</p>
                    <p className=''>{correctAnswer}</p>
                    <FontAwesomeIcon className='text-center px-2 py-4' icon={faEye} />

                </div>

                <div className=' text-xl grid sm:grid-cols-2 md:grid-cols-2 '>
                    <button onClick={handelCheckBox} className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 flex'>
                        <div><input type="checkbox" className="checkbox" />
                        </div> <p className='ml-2'>{options[0]}</p></button>
                    <button onClick={handelCheckBox} className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 flex'>
                        <div><input type="checkbox" className="checkbox" />
                        </div> <p className='ml-2'>{options[1]}</p></button>
                    <button onClick={handelCheckBox} className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 flex '>
                        <div><input type="checkbox" className="checkbox" />
                        </div> <p className='ml-2'>{options[2]}</p></button>
                    <button onClick={handelCheckBox} className='border-solid border-2 border-sky-500 rounded-md px-4 py-2 mx-4 my-2 flex'>
                        <div><input type="checkbox" className="checkbox" />
                        </div> <p className='ml-2'>{options[3]}</p></button>
                </div>



            </div>
        </div>
    );
};

export default Question;