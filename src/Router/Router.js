import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root/Root";
import Topics from "../components/Topics/Topics"
import About from '../components/About/About'
import Statistics from "../components/Statistics/Statistics"
import Blog from "../components/Blog/Blog"
import Quiz from "../components/Quiz/Quiz";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Topics></Topics>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            },
            {
                path: 'topics',
                element: <Topics></Topics>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            },
            {
                path: 'topic/:id',
                element: <Quiz></Quiz>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: 'blog',
                element: <Blog></Blog>,
            },

        ],
    },
])