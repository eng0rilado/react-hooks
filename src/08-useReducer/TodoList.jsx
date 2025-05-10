import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], handleDeleteTodo, handleToggleTodo }) => {
    return (
        <ul className='list-group'>
            {
                todos.map((todo) => {
                    return (
                        //Mejor usar useContext para guardar la función y no pasarla por varios niveles
                        <TodoItem key={todo.id}
                            todo={todo}
                            handleDeleteTodo={handleDeleteTodo}
                            handleToggleTodo={handleToggleTodo}
                        />
                    )
                })
            }
        </ul>
    )
}
