import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Topics from "../components/Topics/Topics";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Root></Root>
            }

        ]
    },
])