import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Character from './Character-Counter.jsx'
import AddTodo from './Add-Todo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AddTodo/>
  </StrictMode>
)
