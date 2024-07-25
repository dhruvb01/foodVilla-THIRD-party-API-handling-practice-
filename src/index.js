import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './testing/test'
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Components/Router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}></RouterProvider>
   // <Test></Test>
);
