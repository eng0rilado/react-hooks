import React, { useEffect, useReducer } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks/useTodos';

export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, pendingTodosCount, allTodosCount} = useTodos();

    return (
        <>
            <h1>TodoApp: {allTodosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agrsegar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>
            </div>

        </>

    )
}
