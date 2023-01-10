import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>blog</h1>
            <div className='m-auto w-2/4 my-10 bg-slate-200 rounded-2xl drop-shadow-2xl'>
                <h1 className='text-3xl my-3'>
                    what is purpose of react router?
                </h1>
                <p className='p-3'>
                    The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
                </p>
            </div>
            <div className='m-auto w-2/4 my-10 bg-slate-200 rounded-2xl drop-shadow-2xl'>
                <h1 className='text-3xl my-3'>
                    how does context api work?
                </h1>
                <p className='p-3'>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className='m-auto w-2/4 my-10 bg-slate-200 rounded-2xl drop-shadow-2xl'>
                <h1 className='text-3xl my-3'>
                    React JS useRef Hook
                </h1>
                <p className='p-3'>
                    The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.

                    Syntax:

                    const refContainer = useRef(initialValue);
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                </p>
            </div>
        </div>
    );
};

export default Blog;