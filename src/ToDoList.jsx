import { useState } from "react";

export default function ToDoList() {
    let [todo, setTodo] = useState(["Sample Tasks"]);
    let [newTodo, setNewTodo] = useState([""]);

    let addNewTask = () => {
        if(newTodo != "" && newTodo.length <= 20) {
            setTodo([...todo, newTodo]);
            setNewTodo("");
        }
    }
    let updateToDoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <h2>Created by xlence</h2>
            <input type="text" placeholder="tasks to do" value={newTodo} onChange={updateToDoValue}/>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h3>Tasks To Do :-</h3>
            <ul>
                {
                    todo.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}