import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Style/index.css';
import App from './Pages/App.jsx';
import LoginState from './Components/LoginState';  // Import LoginState

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LoginState>
            <App />
        </LoginState>
    </StrictMode>,
);