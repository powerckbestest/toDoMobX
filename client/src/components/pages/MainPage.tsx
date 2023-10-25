import React from 'react'
import AddTodoForm from '../UI/AddTodoForm'
import TodoList from '../TodoList'

export default function MainPage():JSX.Element {
  return (
    <div>
      <AddTodoForm/>
      <TodoList/>
    </div>
  )
}
