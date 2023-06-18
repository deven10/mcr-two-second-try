import React from "react";

export const HabitDetails = ({ data }) => {
  return (
    <div>
      <button
        type="button"
        className="btn default-button"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal3-${data.id}`}
      >
        View Details
      </button>
      <div
        className="modal fade"
        id={`exampleModal3-${data.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Habit Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="habit">
                <p className="habit-name">Habit Name: {data.Habit_Name}</p>
                <p>
                  <span>Repeat:</span> {data.Repeat}
                </p>
                <p>
                  <span>Goal:</span> {data.Goal}
                </p>
                <p>
                  <span>Time of Day:</span> {data.Time_of_Day}
                </p>
                <p>
                  <span>Start Date:</span> {data.Start_Date}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
