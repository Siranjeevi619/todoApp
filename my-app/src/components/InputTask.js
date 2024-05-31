import React from "react";

const InputTaskField = ({ work, setWork, addWork, setShowInputField }) => {
  return (
    <div className="">
      <div className="input-group">
        <input
          type="text"
          value={work}
          className="form-control shadow"
          onChange={(e) => setWork(e.target.value)}
          placeholder="Enter a task"
        />
      </div>
      <div className="my-3 d-flex align-items-center justify-content-center">
        <button className="btn add-btn" onClick={addWork}>
          Add Task <i className="bi bi-folder-plus"></i>
        </button>
        <button
          className="btn add-btn mx-3"
          onClick={() => setShowInputField(false)}
        >
          View List <i className="bi bi-list-nested"></i>
        </button>
      </div>
    </div>
  );
};

export default InputTaskField;
