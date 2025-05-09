import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CallbackHook } from './06-memos/CallbackHook.jsx'
import { Padre } from './07-tarea-memo/Padre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Padre />
  </StrictMode>,
)
