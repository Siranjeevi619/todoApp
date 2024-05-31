import React from "react";

const ShowTask = ({
  todo = [],
  completedTask = [],
  removedTask = [],
  completedWork,
  updateWork,
  deleteWork,
  setShowInputField,
}) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="allTaskTab"
                  data-bs-toggle="tab"
                  data-bs-target="#allTask"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  All task
                </button>
                <button
                  className="nav-link"
                  id="completedTaskTab"
                  data-bs-toggle="tab"
                  data-bs-target="#completedTask"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Completed
                </button>
                <button
                  className="nav-link"
                  id="deletedTaskTab"
                  data-bs-toggle="tab"
                  data-bs-target="#notCompletedTask"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Deleted
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="allTask"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container-fluid my-4">
              {todo.map((work, index) => (
                <div key={index} className="">
                  <p className="h5 card-text text-wrap">{work}</p>
                  <div className="d-flex justify-content-evenly align-items-center">
                    <button
                      className="btn completed-btn"
                      onClick={() => completedWork(index)}
                    >
                      <i className="bi bi-check-circle-fill"></i>
                    </button>
                    <button
                      className="btn edit-btn"
                      onClick={() => updateWork(index)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      onClick={() => deleteWork(index)}
                      className="btn delete-btn"
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="completedTask"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {completedTask.map((work, index) => (
              <div className="col" key={index}>
                <p className="h3">{work}</p>
              </div>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="notCompletedTask"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            {removedTask.map((work, index) => (
              <div className="col" key={index}>
                <p>{work}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          onClick={() => setShowInputField(true)}
          className="btn btn-color shadow"
        >
          Back <i className="bi bi-back"></i>
        </button>
      </div>
    </div>
  );
};

export default ShowTask;
