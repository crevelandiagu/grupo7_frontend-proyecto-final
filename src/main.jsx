import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { AppTheme } from './theme'

import { JobsApp } from './JobsApp'
import { store } from './store'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppTheme> */}
      <Provider store={store}>
        <JobsApp />
      </Provider>
    {/* </AppTheme> */}
  </React.StrictMode>
)
