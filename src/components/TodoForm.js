import React, { useState } from 'react'
//import uuid from "uuid";
//import uuid from 'uuid/v4'
//import uuid from "uuid";
import {v4 as uuid} from 'uuid'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed : false
    });

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(todo);
        //const id2 = uuid()
        //console.log("uuid",id2);

        addTodo({ ...todo, id: uuid() });
        setTodo({ ...todo, task: "" });
    }

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
        </form>
    )
}

export default TodoForm
