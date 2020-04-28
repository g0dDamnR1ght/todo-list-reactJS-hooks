import React, {useState, useEffect} from "react"; 
import Form from '../Form';
import List from '../List/List';

const Main = () => {

  const [todos, setTodos] =  useState([]);
  const [title, setTitle] = useState(""); 

  const toLocalStorage = (string, item) => localStorage.setItem(string, JSON.stringify(item));

  const todosArr = localStorage.getItem("arr"); 
  let data = JSON.parse(todosArr)

  window.onstorage = event => {
    if(event.key !== []) {
      setTodos([])
    }
  }

  useEffect( () => {
    if(!todos.length){
        setTodos(data)
      }
    }, [])

    useEffect(() => toLocalStorage("arr", todos))

  const changeHandler =  title => setTitle(title)
   

 function submitHandler () {
    let todo = {
      title: title, 
      id: 1 + Math.random(), 
      isDone: false
    }

    setTodos([...todos, todo]);

    setTitle( prev => {
      let defTitle = ""
      return defTitle
    }); 
  } 

  function doneTodo (id) {
    let todo = todos.find(t => t.id === id);
      todo.isDone = !todo.isDone
      setTodos([...todos])
  }
  
    const deleteItem = id => {
      let todo = todos.findIndex(t => t.id === id)
      setTodos( todos => {
        let prevState = todos.concat(); 
        prevState.splice(todo, 1)
        return prevState
      })
    }

    return(
        <>
        <Form title={title}
              onChange={changeHandler}
              submitHandler={submitHandler}/>
        <List todos={todos}
              data={data}
              doneTodo={doneTodo}
              deleteItem={deleteItem} />
        </>
 
    )
}

export default Main