import React from 'react'

export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                onDoubleClick={() => handleToggleTodo(todo)}
                className={ `align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }` }>
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => handleDeleteTodo(todo)}
            >
                Borrar
            </button>
        </li>
    )
}
