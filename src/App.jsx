import {useState, useEffect} from "react";
import "./App.css"
function App(){
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(function(){
    fetch("https://todo-backend-nzdw.onrender.com/todos")
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      setTodos(data);
    });
  },[]);

  function addTodo(){
    if(task === ""){
      alert("Add a task");
    }
    else{
        fetch("https://todo-backend-nzdw.onrender.com/todos",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({task:task})
    })
    .then(function(res){return res.json();})
    .then(function(newTodo){
      setTodos([...todos,newTodo]);
      setTask("");
    });
    }
  }

  function deleteTodo(id){
    fetch("https://todo-backend-nzdw.onrender.com/todos" + id,{
      method: "DELETE"
    })
    .then(function(){
      setTodos(todos.filter(function(t){
        return t._id !== id;
      }));
    });
    
  }

  return(
    <div>
      <h1>My Todo App</h1>
      <input 
       value={task}
       onChange={function(e){
        setTask(e.target.value);
       }}
       placeholder="Enter a task"
      />
      <button 
      onClick={addTodo}
      >Add</button>
      <ul>
        {todos.map(function(todo){
          return(
            <li key={todo._id}>
              {todo.task}
              <button onClick={
                function(){
                  deleteTodo(todo._id);
                }
              }>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;