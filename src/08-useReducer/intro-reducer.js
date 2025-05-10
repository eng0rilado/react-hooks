

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

const todoReducer = (state = initialState, action= {}) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload] // Con el spread no mutamos el state!!!
    }


    return state;

}

let todos = todoReducer();
console.log(todos);


//No hacer!!
//No se puede mutar el reducer, no se rerenderizará. mala práctica.
// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false,
// })


//Añadimos nuevo estado de esta forma

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}


todos = todoReducer( todos, addTodoAction);

console.log({state: todos});
