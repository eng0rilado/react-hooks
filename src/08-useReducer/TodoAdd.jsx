import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({handleNewTodo}) => {

    const { description, onResetForm, onInputChange } = useForm({
        description: '',
    })


    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done:false,
            description: description
        }

        handleNewTodo && handleNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description" //Importante
                    value={description}
                    onChange={onInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    onClick={onFormSubmit}>
                    Agregar
                </button>
            </form>

        </>
    )
}
