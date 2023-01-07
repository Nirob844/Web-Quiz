import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicsData = useLoaderData()
    const quiz = topicsData.data
    console.log(topicsData);
    return (
        <div className=''>
            <div className=''>
                {
                    quiz.map(topic => (
                        <Topic
                            key={topic.id}
                            topic={topic}>

                        </Topic>))
                }
            </div>
        </div>
    );
};

export default Topics;