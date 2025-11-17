import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CPD from './Pages/CPD.jsx';
import SRM from './Pages/SRM.jsx';
import Web from './Pages/Web.jsx';
import SeeYouSoon from './Pages/SeeYouSoon.jsx';
import CEO from './Pages/CEO.jsx';



const router = createBrowserRouter([
  {
    path: "/ceo",
    element: <CEO></CEO>,
  },
  {
    path: '/cpd',
    element: <CPD></CPD>
  },
  {
    path: '/srm',
    element: <SRM></SRM>
  },
  {
    path: '/web-and-software',
    element: <Web></Web>
  },
  {
    path: '*',
    element: <SeeYouSoon></SeeYouSoon>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
