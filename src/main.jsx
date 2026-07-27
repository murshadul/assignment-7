import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router/dom'

import { router } from './Router/Router.jsx'
import ShowContextProvider, { ShowContext } from './context/ShowContext.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ShowContextProvider><RouterProvider router={router}></RouterProvider></ShowContextProvider>
  </StrictMode>,
)
