import axios from 'axios';

const baseURL = 'https://todoapp-backend-92g1.onrender.com';

const getAllToDos = (setToDos) =>{
    axios
        .get(baseURL)
        .then(({data}) =>{
            console.log('data: ', data);
            setToDos(data)
        })
}

const addToDo = (content, setContent, setToDos) =>{
    axios
        .post(`${baseURL}/save`,{content})
        .then((data) =>{
            console.log(data)
            setContent("")
            getAllToDos(setToDos)
        })
        .catch((error) => console.log(error))
}

const updateToDo = (todoId, content, setContent, setIsUpdating, setToDos) =>{
    axios
        .post(`${baseURL}/update`,{_id: todoId, content})
        .then((data) =>{
            setContent("")
            setIsUpdating(false)
            getAllToDos(setToDos)
        })
        .catch((error) => console.log(error))
}


const deleteTodo = (_id, setToDos) =>{
    axios
        .post(`${baseURL}/delete`,{_id})
        .then((data) =>{
            console.log(data)
            getAllToDos(setToDos)
        })
        .catch((error) => console.log(error))
}
export {getAllToDos,addToDo, updateToDo, deleteTodo}