import React, { useState,useEffect } from 'react';
import './App.css';


function Todolist() {
  const [todo, setTodo] = useState([]);
  const [work, setWork] = useState('');
  const [showInputField, setShowInputField] = useState(true);
  const [completedTask,setCompletedTask] = useState([]);
  const [removedTask,setRemovedTask] = useState([]);

  useEffect (()=>{
    document.title = "Todo App"
  },[]);

  const addWork = () => {
    if (work.trim() !== '') {
      setTodo([...todo, work]);
      setWork('');
    }
  };

  const deleteWork = (workIndex) => {
    const changedTodo = [...todo];
    setRemovedTask(changedTodo.splice(workIndex, 1));
    setTodo(changedTodo);
  };


  const updateWork =(workIndex)=>{
    const newTask = prompt('Enter the new task:')
    if(newTask !== null){
      const updateTask = [...todo]
      updateTask[workIndex] = newTask
      setTodo(updateTask)
    }
  }

  const completedWork = (workIndex) =>{
    const completedTaskArr = [...todo]
    const setCompTask = completedTaskArr[workIndex]
    console.log(setCompTask);
    setCompletedTask([...completedTask,setCompTask])
    const updateListAfterComplete = [...todo]
    updateListAfterComplete.splice(workIndex,1)
    setTodo(updateListAfterComplete)
  }

  return (
    <div className='container-fluid'>
      {/* addTaskCard */}
      <div className=''>
        <h1 className='h1 text-white fw-1 text-center nav-bar'>To-do List</h1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 col-sm-3'>

            </div>
            <div className='col-12 col-md-6 col-sm-6 mt-5 border-2'>
              <div className='border shadow'>
               <div className='p-md-5 p-4'>
               {showInputField ? (
                  <div className=''>
                    <div className='input-group'>
                      <input
                        type='text'
                        value={work}
                        className='form-control shadow'
                        onChange={(e) => setWork(e.target.value)}
                        placeholder='Enter a task'
                      />
                    </div>
                    <div className=' my-3 d-flex align-items-center justify-justify-content-center '>
                    <button className='btn add-btn' onClick={addWork}>Add Task <i class="bi bi-folder-plus"></i></button>
                    <button className='btn add-btn  mx-3' onClick={()=>setShowInputField(false)}>ViewList <i class="bi bi-list-nested"></i></button> 
                    </div>
                  </div>
                ):
                (
                  <div className=''>
                    <div className='container-fluid'>
                      <div className='row'>
                          <div className='col-12'>
                          <nav >
                            <div class="nav nav-tabs " id="nav-tab" role="tablist">
                              <button class="nav-link active" id="allTaskTab" data-bs-toggle="tab" data-bs-target="#allTask"   aria-controls="nav-home" aria-selected="true">All task</button>
                              <button class="nav-link" id="completedTaskTab" data-bs-toggle="tab" data-bs-target="#completedTask"   aria-controls="nav-profile" aria-selected="false">Completed</button>
                              <button class="nav-link" id="deletedTaskTab" data-bs-toggle="tab" data-bs-target="#notCompletedTask"  aria-controls="nav-contact" aria-selected="false">Deleted</button>
                            </div>
                          </nav>
                          </div>
                      </div>
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="allTask" role="tabpanel" aria-labelledby="nav-home-tab">
                          <div className='container-fluid my-4'>
                          {todo.map((work, index) => (
                          <div key={index} className=''>
                       
                            <p className='h5 card-text text-wrap'>{work}</p>
                            <div className='d-flex justify-content-evenly align-items-center'>
                            <button className='btn completed-btn ' onClick={()=>completedWork(index)}><i class="bi bi-check-circle-fill"></i></button>
                            <button className='btn edit-btn' onClick={()=>updateWork(index)} ><i className="bi bi-pencil-square"></i></button>
                            <button onClick={() => deleteWork(index)} className='btn delete-btn '><i class="bi bi-trash3-fill"></i></button>
                            </div>
                      
                        </div>
                        ))}
                          </div>
                    

                      </div>
                      <div class="tab-pane fade" id="completedTask" role="tabpanel" aria-labelledby="nav-profile-tab">
                        {
                          completedTask.map((work,index) =>(
                          <div className='col' key={index}>
                            <p className='h3'>{work}</p>
                          </div>
                        ))}
                      </div>
                      <div class="tab-pane fade" id="notCompletedTask" role="tabpanel" aria-labelledby="nav-contact-tab">
                        {
                          removedTask.map((work,index)=>(
                            <div className='col' key={index}>
                              <p>{work}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                      <button onClick={() => setShowInputField(true)} className='btn btn-color shadow'>Back <i class="bi bi-back"></i></button>
                    </div>
                  </div>
                )}
               </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-3'>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todolist;