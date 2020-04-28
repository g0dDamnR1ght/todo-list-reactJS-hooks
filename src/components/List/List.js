import React from 'react'
import Todo from './Todo'
import EmptyTodo from './EmptyTodo';

const List = (props) => {


    // props.todos === null ||
    return(
        <ul className="list-group">
            { props.todos.length ? props.todos.map( todo => {
            return <Todo name={todo.title}
                        key={todo.id + Math.random()}
                        isDone={todo.isDone}
                        todo={todo}
                        doneTodo={props.doneTodo}
                        deleteItem={props.deleteItem} />
            }) : <EmptyTodo/> }
        </ul>
    )
}

export default List