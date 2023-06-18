import React, { useState, useContext } from "react";
import { ContextHabits } from "../context/HabitsContext";
import { v4 as uuid } from "uuid";

export const EditHabit = ({ data }) => {
  const { allHabits, setAllHabits } = useContext(ContextHabits);
  const [updateHabit, setUpdateHabit] = useState({
    id: "",
    habitName: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    selectedDate: "",
  });

  // updating state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdateHabit({
      ...updateHabit,
      [id]: value,
    });
  };

  // Update Habit Functionality
  const handleUpdateHabit = (newHabit) => {
    if (
      newHabit.habitName === "" ||
      newHabit.repeat === "" ||
      newHabit.goal === "" ||
      newHabit.timeOfDay === "" ||
      newHabit.selectedDate === ""
    ) {
      alert("Kindly please fill in all the details");
    } else {
      console.log(newHabit.habitName === "");
      const updatedHabit = allHabits.map((habit) =>
        habit.id === newHabit.id
          ? {
              id: newHabit.id,
              Habit_Name: newHabit.habitName,
              Repeat: newHabit.repeat,
              Goal: newHabit.goal,
              Time_of_Day: newHabit.timeOfDay,
              Start_Date: newHabit.selectedDate,
            }
          : habit
      );
      setAllHabits(updatedHabit);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn default-button"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal1-${data.id}`}
        onClick={() => {
          setUpdateHabit(() => ({
            id: data.id,
            habitName: data.Habit_Name,
            repeat: data.Repeat,
            goal: data.Goal,
            timeOfDay: data.Time_of_Day,
            selectedDate: data.Start_Date,
          }));
        }}
      >
        Edit Details
      </button>
      <div
        className="modal fade"
        id={`exampleModal1-${data.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Habit Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="habitName" className="form-label">
                  Habit name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="username"
                  value={updateHabit.habitName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repeat" className="form-label">
                  Repeat:
                </label>
                <select
                  name="repeat"
                  id="repeat"
                  className="form-control"
                  value={updateHabit.repeat}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Select an Option</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="goal" className="form-label">
                  Goal:
                </label>
                <select
                  name="goal"
                  className="form-control"
                  id="goal"
                  value={updateHabit.goal}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Select an Option</option>
                  <option value="1 time daily">1 time daily</option>
                  <option value="2 times daily">2 times daily</option>
                  <option value="3 times daily">3 times daily</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="timeOfDay" className="form-label">
                  Time of Day:
                </label>
                <select
                  name="timeOfDay"
                  className="form-control"
                  id="timeOfDay"
                  value={updateHabit.timeOfDay}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Select an Option</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="selectedDate" className="form-label">
                  Start Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={updateHabit.selectedDate}
                  onChange={(e) => handleChange(e)}
                  name="selectedDate"
                  id="selectedDate"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => handleUpdateHabit(updateHabit)}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
