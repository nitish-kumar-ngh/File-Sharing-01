import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Bhavesh from './Bhavesh.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App/>
  </StrictMode>,
)
