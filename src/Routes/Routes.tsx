import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SearchFlight from "../SearchFlight/SearchFlight";

export const Routes: React.FC = () => {

    const routes = [
        {
            path: '/',
            element: <SearchFlight/>,
            children: [
                {
                    path: '/searchFlight',
                    element: <SearchFlight/>,
                }
            ]
        }
    ];

    const router = createBrowserRouter(
         routes
    );

    return <RouterProvider router={router}/>

}