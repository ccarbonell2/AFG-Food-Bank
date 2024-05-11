//Credit Cecilia Carbonell
//Thank you to Samhitha Bodangi for helping set up the navigation bar!
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './Components/Admin';
import Preferences from './Components/Preferences';
import ClientSchedule from './Components/ClientSchedule';
import Schedule from './Components/Schedule';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Admin",
    element: <Admin />,
  },
  {
    path: "Preferences",
    element: <Preferences />,
  },
  {
    path: "ClientSchedule",
    element: <ClientSchedule />,
  },
  {
    path: "Schedule",
    element: <Schedule />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);