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
  const addTask = (e) => { //
  }

  //Delete task
  const deleteTask = (id) => { //
  }

  //Mark task as done
  const markDone = (id) => { //
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
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span>
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
