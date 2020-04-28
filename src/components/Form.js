import React from 'react'

const Form = (props) => {

   function submitHandler (event) {
        event.preventDefault();
        if(!props.title){
            return false
        }else{
            props.submitHandler(); 
        }  
    }

    const changeHandler = e => {
        props.onChange(e.target.value)
    }

    return(
    <form onSubmit={submitHandler}>
        <div className="form-group">
        <label htmlFor="input">What do you want to do? </label>
        <input type="text"
            className="form-control"
            placeholder="your plans for today"
            value={props.title}
            onChange={changeHandler}/>
        </div>

        <button className="btn btn-primary"
                type="submit"
        >Add</button>
    </form>
    )
}

export default Form