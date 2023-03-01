import React, {useState} from "react";


const AddTodoForm = ({addNew}) =>{
    const [addTodo, setAddTodo] = useState('')   
    
  const handlerTodo = (e)=>{
      e.preventDefault();
      
      addNew(addTodo)
      setAddTodo('')
    }
    return(
        <form className="container mt-5" onSubmit={handlerTodo}>
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajoutez Todo</label>
                    <input className="form-control" type="text"  value={addTodo} onChange={(e) =>  setAddTodo(e.target.value)}/>
                    <input className="btn btn-success mt-4" type="submit"/>
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm;