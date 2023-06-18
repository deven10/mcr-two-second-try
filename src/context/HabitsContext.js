import React, { createContext, useState } from "react";
import { Habits } from "../db/Habits";

export const ContextHabits = createContext();

export const HabitsContext = ({ children }) => {
  const [allHabits, setAllHabits] = useState(Habits);
  const [archiveHabits, setArchiveHabits] = useState([]);

  // Delete a Habit functionality
  const deleteHabit = (habitID) => {
    setAllHabits(allHabits.filter((habit) => habit.id !== habitID));
  };

  // Archiving a Habit Functionality
  const archiveHabit = (habitID) => {
    setAllHabits(allHabits.filter((habit) => habit.id !== habitID));
    setArchiveHabits([
      ...archiveHabits,
      allHabits.find((habit) => habit.id === habitID),
    ]);
  };

  return (
    <ContextHabits.Provider
      value={{
        allHabits,
        setAllHabits,
        archiveHabits,
        deleteHabit,
        archiveHabit,
      }}
    >
      {children}
    </ContextHabits.Provider>
  );
};
