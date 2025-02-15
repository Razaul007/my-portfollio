import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container mx-auto ">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
