import App from '../App';
import Error from './Error'
import {  createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import Restaurantinfo from './Restaurantinfo';
import Login from './Login';
import Cart from './Cart';
import {lazy} from 'react';
import { Suspense } from 'react';


//lazy loading 
const About=lazy(()=>import('./About'));

const Contact=lazy(()=>import('./Contact'));


export const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/About',
                element:<Suspense fallback={<h1>wait</h1>}><About/></Suspense>
            },
            {
                path:"/Contact",
                element:<Suspense fallback={<h1>wait</h1>}><Contact/></Suspense>
            },
            {
                path:"/Restaurants/:id",
                element:<Restaurantinfo/>
            },
            {
                path:"/login",
                element:<Login/>
            },{
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])
