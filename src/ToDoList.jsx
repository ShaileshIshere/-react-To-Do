import { useState } from "react";
/*
this component is available if we use 'npm install uuid'
and the work of this package is that this assigns a unique id
to any element present on the UI 
*/ 
import {v4 as uuidv4} from 'uuid';

export default function ToDoList() {
    let [todo, setTodo] = useState([{task: "Sample-Tasks", id: uuidv4(), taskDone: false}]);
    let [newTodo, setNewTodo] = useState([""]);

    let addNewTask = () => {
        if(newTodo != "" && newTodo.length <= 20) {
            setTodo((prevTodo) => {
                return [...prevTodo, {task: newTodo, id: uuidv4(), taskDone: false}]
                console.log('I am here');
            });
            setNewTodo("");
        }
    }
    let updateToDoValue = (event) => {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (todoID) => {
        /*
        [filter] = this method filters the array according to the functional commands
        like here inside the filter method we've stated that those ids which aren't equals to the id we've provide(todoID) will remains in the array meanwhile the id which is equal to the [todoID] will be removed from the array.

        inside the filter method if the condition is true then that element will remain safely in the array but if the condition denies then that array will be executing from the array.
        */
        setTodo((prevTodo) => (
            prevTodo.filter((todo) => {
                todo.id !== todoID
            })
        ));
    }
    let allDone = () => {
        setTodo((prevTodo) =>
            prevTodo.map((todo) => ({
                ...todo,
                taskDone: true,
            }))
        );
    };
    let markOne = (todoID) => {
        setTodo((prevTodo) => (
            prevTodo.map((todo) => {
                if(todo.id === todoID) {
                    return {
                        ...todo, 
                        taskDone: true,
                    }
                }
                else 
                    return todo;
            })
        ));
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
                    /*
                    [map] = this method will change the array we wanted it to be, like here we're changing the array everytime when there's a new <li> will be added.
                    The map method in JavaScript is a function used on arrays to create a new array populated with the results of calling a provided function on every element in the original array. It does not modify the original array but produces a new array with the transformed values.

                    example :-
                    const numbers = [1, 2, 3, 4, 5];
                    const doubledNumbers = numbers.map(number => number * 2);
                    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
                    */
                    todo.map((todo) => (
                        <li key={todo.id} style={{textDecoration: todo.taskDone ? 'line-through' : 'none'}}>
                            <span> {todo.task} </span>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={() => {
                                deleteTodo(todo.id)
                            }}>delete</button>
                            <button onClick={() => {
                                markOne(todo.id)
                            }}>mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={allDone}>mark all as done</button>
        </div>
    );
}