import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
/*import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrash, faPlus
} from '@fortawesome/free-solid-svg-icons';*/
function App() {

const [todo, setTodo] = useState([
  {"id": 1, "title": "Learn React", "status": false},
  {"id": 2, "title": "Learn Angular", "status": false},
]);

//temporarily store the task
const [newTask, setNewTask] = useState("");
const [updateData, setUpdateData = useState("");

//add new task
const addTask = (e) => {
}

//Delete task
const deleteTask = (id) => {
}

//Mark task as done
const markDone = (id) => {
}

//Cancel update
const cancelUpdate = () => {
}

//Change the task
const changeTask = (e) => {
}

//Update task
const updateTask = (id) => {
}


  return (
    <div className="container App">
      <br></br>
      <h2>(James' To Do List App)</h2>
      <br></br>

    </div>
  );
}

export default App;
