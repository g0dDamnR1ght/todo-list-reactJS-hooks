import React from 'react'

const Todo = (props) => {
    const classes = ["list-group-item", "d-flex", "justify-content-between", "align-items-center"];     

    if(props.isDone){
       classes.push('active')
    }

    return(

    <li className={classes.join(" ")}>
        <div>{props.name}</div> 
        <div className="btn-group" >
            <button className="btn btn-primary"
                    type="button" 
                    onClick={() => props.doneTodo(props.todo.id)}
                    >Done</button>
            <button className="btn btn-danger"
                    onClick={ () => props.deleteItem(props.todo.id)}>Delete</button>
        </div>
    </li>
    )
}

export default Todo