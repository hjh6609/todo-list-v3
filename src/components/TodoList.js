import React from 'react'
import Todo from './Todo';

function TodoList({ todos ,removeTodo ,toggleComplete }) {
    //console.log({todos})
    return (
        <ul>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    )
}

export default TodoList

