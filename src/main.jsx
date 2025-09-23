import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifExpertApp from './GitExpertApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp/>  
  </StrictMode>,
)
