import React from "react"

const DoneTodo = (props) => {

    return(
        <li className="list-group-item active ">{props.name} </li>
    )
}

export default DoneTodo