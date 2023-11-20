import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TodoItems from './components/TodoItems'

function App() {
    return (
        <div>
            <Todo />
            <TodoItems />
        </div>    
    )
}

export default App
