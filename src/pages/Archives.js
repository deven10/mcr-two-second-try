import React, { useContext } from "react";
import { ContextHabits } from "../context/HabitsContext";

export const Archives = () => {
  const { archiveHabits } = useContext(ContextHabits);
  return (
    <div className="habits-wrapper">
      {archiveHabits.map((habit) => {
        return (
          <div key={habit.id} className="habit">
            <p className="habit-name">Habit Name: {habit.Habit_Name}</p>
            <p>Repeat: {habit.Repeat}</p>
            <p>Goal: {habit.Goal}</p>
            <p>Time of Day: {habit.Time_of_Day}</p>
            <p>Start Date: {habit.Start_Date}</p>
          </div>
        );
      })}
    </div>
  );
};
