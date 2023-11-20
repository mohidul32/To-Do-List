import React from 'react'
import './CSS/TodoItems.css'

import tick from './Asset/tick.png'
import not_tick from './Asset/not_tick.png'
import cross from './Asset/cross.png'

const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
        <div className="todoitems-container">
            {display===""}<img src={not_tick}/>
            <img src={tick}/>
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' src={cross}/>
    </div>
  )
}

export default TodoItems
