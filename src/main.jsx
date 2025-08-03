import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelloArrow, HelloWorld } from './HelloWorld.jsx'
import GreetingCard from './components/GreetingCard.jsx'
import GreetingCardDestruct from './components/GreetingCardDestruct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <GreetingCard name="Sumanth" message="Wishing you a fantastic day!" />
       
        <GreetingCardDestruct name="Sathvika" message="Great to see you again in a Cleaner & Readable  code !" textColor="green" />
        
    </>    
  </StrictMode>,
)
