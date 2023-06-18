import React, { useContext } from "react";
import { AddNewHabit } from "../component/AddNewHabit";
import { ContextHabits } from "../context/HabitsContext";
import { HabitDetails } from "../component/HabitDetails";
import { EditHabit } from "../component/EditHabit";

export const Home = () => {
  const { allHabits, deleteHabit, archiveHabit } = useContext(ContextHabits);
  return (
    <div>
      <AddNewHabit />
      <div className="habits-wrapper">
        {allHabits.map((habit) => {
          return (
            <div key={habit.id} className="habit">
              <p className="habit-name">Habit Name: {habit.Habit_Name}</p>
              <div className="call-to-action-button">
                <HabitDetails data={habit} />
                <EditHabit data={habit} />
                <button
                  className="default-button"
                  onClick={() => archiveHabit(habit.id)}
                >
                  Archive
                </button>
                <button
                  className="default-button"
                  onClick={() => deleteHabit(habit.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
