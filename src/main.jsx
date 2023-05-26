import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './components/Routes/Routes.jsx';
import AuthProviders from './components/Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gray-900'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>


)
