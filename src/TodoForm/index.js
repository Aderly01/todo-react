import React from "react";
import { TodoContext } from "../todoContext";
import "./TodoForm.css"

function TodoForm(){
    const [ newTodoValue, setNewTodoValue ] = React.useState('')

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Describe un nuevo ToDo</label>
            <textarea 
                placeholder="Introducir texto"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }