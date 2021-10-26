import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../todoContext"

function TodoSearch () {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }
    return (
        <input 
            className="TodoSearch" 
            placeholder="Tarea" 
            onChange={onSearchValueChange}   
        />
    )
} 

export {TodoSearch};