import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/montserrat";
import "@fontsource/poppins";
import Caro from './components/Caro';
import Lobbycaro from './components/Lobbycaro';
import Flapbird from './components/Flapbird';
import Lobbyflapbird from './components/Lobbyflapbird';
import Bubbles from './components/Bubbles';
import Lobbybubble from './components/Lobbybubble';
import Goldegg from './components/Goldegg';
import Lobbygoldegg from './components/Lobbygoldegg';
import Therock from './components/Therock';
import Lobbytherock from './components/Lobbytherock';

import { RouterProvider,createBrowserRouter, BrowserRouter , Routes, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: "/caro",
    element: <Caro />,
  },
  {
    path: "/lobbycaro",
    element: <Lobbycaro />,
  },
  {
    path: "/flapbird",
    element: <Flapbird />,
  },
  {
    path: "/lobbyflapbird",
    element: <Lobbyflapbird />,
  },
  {
    path: "/bubbles",
    element: <Bubbles />,
  },
  {
    path: "/lobbybubble",
    element: <Lobbybubble />,
  },
  {
    path: "/goldegg",
    element: <Goldegg />,
  },
  {
    path: "/lobbygoldegg",
    element: <Lobbygoldegg />,
  },
  {
    path: "/therock",
    element: <Therock />,
  },
  {
    path: "/lobbytherock",
    element: <Lobbytherock />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);