import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomeScreen/>,
                index: true
            }
        ]
    }
])