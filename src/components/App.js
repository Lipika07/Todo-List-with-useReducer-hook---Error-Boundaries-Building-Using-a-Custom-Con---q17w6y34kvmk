import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,{/* Initial todo state array, could be an array for storing indivial todo objects */})
  
 
  return (
    <div id="main">
      <AddTodo />
     {/* Render list of Todo Components here */}
 <h1> Todo App </h1>
    {/* <TodoApp /> */}


    </div>
  )
}


export default App;
