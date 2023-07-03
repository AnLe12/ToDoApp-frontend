import {useState, useEffect} from 'react';
import Todo from './components/Todo'
import {getAllToDos, addToDo,updateToDo, deleteTodo} from './utils/HandleAPI'
function App() {
  const [toDos, setToDos] = useState([])
  const [content, setContent] = useState("")
  const [isUpdating,setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")

  useEffect(() =>{
    getAllToDos(setToDos)
  }, [])

  const updateMode = ( _id, content) =>{
    setIsUpdating(true)
    setContent(content)
    setTodoId(_id)

  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add Todos..." 
          value = {content}
          onChange = {(e) => setContent(e.target.value)}
          />
          <div 
          className="add" 
          onClick={ isUpdating ? 
          () =>updateToDo(todoId,content, setContent,setIsUpdating, setToDos) :
          () =>addToDo(content, setContent, setToDos) }>{isUpdating ? "Update" : "Add"}</div>
        </div>

        <div className="list">
          
          {toDos.map((item)=> 
          <Todo 
          data-index={item._id} 
          content={item.content}
          updateMode = {() =>updateMode(item._id, item.content)}
          deleteTodo = {() =>deleteTodo(item._id, setToDos)}
          />)}



        </div>
      </div>
    </div>
  );
}

export default App;
