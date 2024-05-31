import React, { useState } from "react";
import "./styles/style.css";
import ShowTask from "./ShowTask";
import InputTaskField from "./InputTask";

function Todolist() {
  const [todo, setTodo] = useState([]);
  const [work, setWork] = useState("");
  const [showInputField, setShowInputField] = useState(true);
  const [completedTask, setCompletedTask] = useState([]);
  const [removedTask, setRemovedTask] = useState([]);

  const addWork = () => {
    if (work.trim() !== "") {
      setTodo([...todo, work]);
      setWork("");
    }
  };

  const deleteWork = (workIndex) => {
    const changedTodo = [...todo];
    setRemovedTask([...removedTask, changedTodo.splice(workIndex, 1)[0]]);
    setTodo(changedTodo);
  };

  const updateWork = (workIndex) => {
    const newTask = prompt("Enter the new task:");
    if (newTask !== null) {
      const updateTask = [...todo];
      updateTask[workIndex] = newTask;
      setTodo(updateTask);
    }
  };

  const completedWork = (workIndex) => {
    const completedTaskArr = [...todo];
    const setCompTask = completedTaskArr[workIndex];
    setCompletedTask([...completedTask, setCompTask]);
    const updateListAfterComplete = [...todo];
    updateListAfterComplete.splice(workIndex, 1);
    setTodo(updateListAfterComplete);
  };

  return (
    <div className="container-fluid">
      <div className="">
        <h1 className="h1 text-white fw-1 text-center nav-bar">To-do List</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-12 col-md-6 col-sm-6 mt-5 border-2">
              <div className="border shadow">
                <div className="p-md-5 p-4">
                  {showInputField ? (
                    <InputTaskField
                      work={work}
                      setWork={setWork}
                      addWork={addWork}
                      setShowInputField={setShowInputField}
                    />
                  ) : (
                    <ShowTask
                      todo={todo}
                      completedTask={completedTask}
                      removedTask={removedTask}
                      completedWork={completedWork}
                      updateWork={updateWork}
                      deleteWork={deleteWork}
                      setShowInputField={setShowInputField}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
