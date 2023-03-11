import React from 'react';
import ReactDOM from 'react-dom/client';

import { Results } from './pages/Results';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './pages/ErrorBoundary';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CategoryProvider } from './contexts/categoryContext';

import { App } from './App';

import reportWebVitals from './reportWebVitals';
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/items",
        element: <Results />,
        errorElement: <ErrorBoundary />,
      }, {
        path: "/items/:id",
        element: <ProductDetails />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <ErrorBoundary />
      },
    ],
  }
]);

const Memorized = React.memo(() => {
  return (
    <>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </>
  )
});

root.render(
  <React.StrictMode>
    <CategoryProvider>
      <Memorized />
    </CategoryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
