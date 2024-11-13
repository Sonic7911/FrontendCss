import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Proj1 from './Proj1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Proj1 />
  </StrictMode>,
)
