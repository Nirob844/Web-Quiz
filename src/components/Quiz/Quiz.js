import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const loaderData = useLoaderData()
    const qst = loaderData.data;
    const questions = qst.questions;
    console.log(questions)
    return (
        <div>
            {
                questions.map(qst => (
                    <Question key={qst.id}
                        qst={qst}>

                    </Question>
                ))
            }
        </div>
    );
};

export default Quiz;