import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: todo.id
        };

        dispatch(action);
    }

    const handleToggleTodo = (todo) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo.id
        };

        dispatch(action);

    }

    return {
        todos, 
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount : todos.filter(todo => todo.done).length,
        allTodosCount : todos.length
    }
}
