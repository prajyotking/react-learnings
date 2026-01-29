import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './contexts/Theme.jsx'

createRoot(document.getElementById('root')).render(
    <Theme>
        <App />
    </Theme>
  
)
