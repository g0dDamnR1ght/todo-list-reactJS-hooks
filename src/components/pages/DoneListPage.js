import React from "react"
import EmptyTodo from "../List/EmptyTodo"
import DoneTodo from "../List/DoneTodo";


const DoneListPage = () => {

    let todosArr = localStorage.getItem("arr"); 
    
    let data = JSON.parse(todosArr); 
    
    let neededData = data.filter( d => d.isDone === true)

    return(
        <div>
            <h1>done list</h1>
            <ul>
                { !data.length ? <EmptyTodo/> : neededData.map( d => <DoneTodo key={d.id} name={d.title} />) } 
            </ul>
        </div>
    )
}

export default DoneListPage