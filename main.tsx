import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './src/home/components/header.tsx'
import Footer from './src/home/components/footer.tsx'
import App from './src/App'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
        <App/>
      <Footer/> 
    </BrowserRouter>
  </StrictMode>
)
