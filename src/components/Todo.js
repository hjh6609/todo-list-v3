import React from 'react'
import '../App';
// import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo , removeTodo , toggleComplete }) {

    
    function handleRemoveClick() {
        //console.log(todo.id);
        removeTodo(todo.id);
    }

    function handleCheckboxClick() {
        //console.log("Check");
        //alert(1);
        //console.log(todo.completed)
        toggleComplete(todo.id);
    }
    
    //console.log("todo.js", todo.task );
    return (
        <ul className={ todo.completed  ? 'todoapp__item-ctx-checked' : ''  }>
            <label class="container">
                <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
                <span className="checkmark" ></span>
            </label>
            {/* <checkbox className="check" checked={todo.completed} onClick={handleCheckboxClick} /> */}
            {todo.task}
            <button onClick={ handleRemoveClick }>delete</button>
        </ul>
    )
}

export default Todo
