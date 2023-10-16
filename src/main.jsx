import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppTheme } from './theme'
import { JobsApp } from './JobsApp'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppTheme> */}
      <JobsApp />
    {/* </AppTheme> */}
  </React.StrictMode>
)
