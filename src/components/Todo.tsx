'use client'
import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { activeTodosAtom, todosAtom } from '@/atoms'

const Todo = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useAtom(todosAtom)
  const [activeCount] = useAtom(activeTodosAtom)

  const addTodo = () => {
    if (input.trim() === '') return
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
    setInput('')
  }

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }


  // const todosAtom = [
  //   {
  //     id: 1,
  //     text: 'Learn React'
  //   },
  //   {
  //     id: 2,
  //     text: 'Learn TypeScript'
  //   },
  //   {
  //     id: 3,
  //     text: 'Build a project'
  //   }
  // ]
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2>To Do List</h2>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder='Add To Do'
        />
        <button onClick={addTodo} className='p-2 border border-black cursor-pointer'>Add</button>
      </div>

      <p>{activeCount} active todo(s)</p>

      <ul className='space-y-2'>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`p-2 border rounded cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>  
  )
}

export default Todo