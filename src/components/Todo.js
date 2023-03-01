import React, {useState} from "react";
import AddTodoForm from "./AddTodoForm"
import {v4 as uuid} from 'uuid'
const Todo = () =>{

  const [todos, setTodos] =  useState([
    {id: 1, todo: "acheter du lait"},
    {id: 2, todo: "acheter du pain"},
    {id: 3, todo: "acheter du sucre"},
   ])
   const [warning, setWarning] = useState(false)

   const addNewTodo = (newTodo) =>{
    if(newTodo !== ""){
        setTodos([
            ...todos,
             {
                id : uuid(),
                todo : newTodo
            }
        ]);
       warning && setWarning(false)
    }else{
        setWarning(true)
    }
   }

   const warningMsg = warning && <div className="alert alert-danger mt-5" role="alert"> Oh shit faut pas laisse vide</div>

   let myTodo = todos.map((todo)=>{
    return(
        <li className="list-group-item" key={todo.id}>{todo.todo}</li>
    )
   })

//    console.log(todos.length)
    return(
        <div className="container text-center">
            {warningMsg}
            <h1 > {todos.length} To-do</h1>
            <ul className="list-group">
            {myTodo}
            </ul>
            <AddTodoForm addNew={addNewTodo}/>
        </div>
    )
}

export default Todo;