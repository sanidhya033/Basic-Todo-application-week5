import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { RenderAllTodo } from './components/Todos'

function App() {
  const [todos, settodos] = useState([]);
  fetch(" http://localhost:3000/todo")
  .then(async function (res) {
    const json =await res.json;

    settodos(json.todos);
  })

  return (
    <div>
       <CreateTodo></CreateTodo>
       <RenderAllTodo todos={[
          {
            title:"go to gym",
            description:"Stay healthy",
            completed:false
          }
        ]}></RenderAllTodo>
    </div>
  )
}

export default App
