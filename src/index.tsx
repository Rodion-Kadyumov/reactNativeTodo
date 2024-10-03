import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppWithRedux from './App/Main'
import { store } from './App/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Login } from './features/auth/Auth'
import { Todolists } from './features/Todolist/ui/Todolists'
import { ErrorPage } from './common/components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWithRedux />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        index: true,
        element: <Navigate to="/todolists" />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/todolists',
        element: <Todolists />,
      },
    ],
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
