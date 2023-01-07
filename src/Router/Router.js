import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Topics from "../components/Topics/Topics";
import About from '../components/About/About'
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Topics></Topics>,
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'topics',
                element: <Topics></Topics>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }

        ]
    },
])