import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './i18n.js'

import { JobsApp } from './JobsApp'
import { store } from './store'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <JobsApp />
      </Provider>
  </React.StrictMode>
)
