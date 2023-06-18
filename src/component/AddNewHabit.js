import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { ContextHabits } from "../context/HabitsContext";

export const AddNewHabit = () => {
  const { allHabits, setAllHabits } = useContext(ContextHabits);
  const [habit, setHabit] = useState({
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
    setHabit({
      ...habit,
      [id]: value,
      id: uuid(),
    });
  };

  // helper function for clearing the form
  const handleClear = () =>
    setHabit({
      id: "",
      habitName: "",
      repeat: "",
      goal: "",
      timeOfDay: "",
      selectedDate: "",
    });

  // Creating new Habit Functionality
  const createNewHabit = () => {
    if (
      habit.habitName === "" ||
      habit.repeat === "" ||
      habit.goal === "" ||
      habit.timeOfDay === "" ||
      habit.selectedDate === ""
    ) {
      alert("Kindly please fill in all the details");
    } else {
      handleClear();
      setAllHabits([
        ...allHabits,
        {
          id: habit.id,
          Habit_Name: habit.habitName,
          Repeat: habit.repeat,
          Goal: habit.goal,
          Time_of_Day: habit.timeOfDay,
          Start_Date: habit.selectedDate,
        },
      ]);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary add-new-habit"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create New Habit
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Habit
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
                  value={habit.habitName}
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
                  value={habit.repeat}
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
                  value={habit.goal}
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
                  value={habit.timeOfDay}
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
                  value={habit.selectedDate}
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
                onClick={() => createNewHabit()}
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
