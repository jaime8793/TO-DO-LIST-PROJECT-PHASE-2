import {useEffect, useState} from 'react';
import AddTaskForm from './Components/AddTaskForm';
import UpdateForm from './Components/UpdateForm';
import ToDo from './Components/ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  useEffect(() => {
    // Get Tasks from database
    fetch('https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks')
    .then(res => res.json())
    .then(data => {
      setToDo(data);
    })
  }, []);



  // Add task 
  ///////////////////////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      // Add to database
      fetch('https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
      })
      .then(res => res.json())
      .then(data => {
        setToDo([...toDo, data]);
        setNewTask('');
      })

      /*setToDo([...toDo, newEntry])
      setNewTask('');*/
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    // Delete from database
    fetch(`https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
    setToDo(newTasks);
  }
  )
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    // Update database
    fetch(`https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks${updateData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    })
    .then(res => res.json())
    .then(data => {
      setUpdateData(data);
    })
    /*setUpdateData(newEntry);*/
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>Jaime's To Do List App</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;