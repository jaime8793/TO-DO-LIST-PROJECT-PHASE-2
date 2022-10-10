import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrash, faPlus
} from '@fortawesome/free-solid-svg-icons';


function App() {

  const [toDo, setTodo] = useState([
    { "id": 1, "title": "Learn React", "status": false },
    { "id": 2, "title": "Learn Angular", "status": false }
  ]);

  //temporarily store the task
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState(''); //for updating the task




  //add new task
  const addTask = (e) => { 
    let num = toDo.length + 1;
    let newEntry = { "id": num, "title": newTask, "status": false };
    setTodo([...toDo, newEntry]);
    setNewTask('');
  }

  //Delete task
  const deleteTask = (id) => { 
    let newTasks = toDo.filter((task) => task.id !== id);
    setTodo(newTasks);
  }

  //Mark task as done
  const markDone = (id) => { 
    let newTasks = toDo.map((task) => {
      if (task.id === id) {
      return({...task, status : !task.status })
      }
      return task;
    });
    setTodo(newTasks);

  }

  //Cancel update
  const cancelUpdate = () => {//
  }

  //Change the task
  const changeTask = (e) => { //
  }

  //Update task
  const updateTask = (id) => { //
  
  }


  return (
    <div className="container App">

      <br></br>
      <h2>(James' To Do List App)</h2>
      <br></br>

      {/*update task*/}
      <div className='row'>
        <div className='col-md-12'>
          <input 
          className='form-control form-control-lg'
          />
          </div>
          <div className='col-auto'>
          <button className='btn btn-success btn-lg btn-block' >Update</button>
          <button className='btn btn-danger btn-lg btn-block' >Cancel</button>
        </div>
      </div>
      <br/>
      {/*add new task*/}
      <div className='row'>
        <div className='col'>
          <input
            className='form-control form-control-lg'
            placeholder='Add new task'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className='col-auto'>
          <button className='btn btn-success btn-lg btn-block'  onClick={addTask}>Add</button>
        </div>
      </div>
      <br></br>



      {/*Dispaly To */}

      {toDo && toDo.length ? '' : 'No tasks to do'}

      {toDo && toDo

        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>

              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className="taskText">{task.title}</span>

              </div>
              <div className="iconsWrap">
                <span title='Completed/Not Completed'
                onClick={(e) => markDone(task.id)}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span title='Edit'>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span title ="Delete"
                onClick={() => deleteTask(task.id)}>
                
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </div>
            </div>

            </React.Fragment>
          )
        })
      }

    </div>
  );
}

export default App;
