import { v4 as uuid } from "uuid";

export const Habits = [
  {
    id: uuid(),
    Habit_Name: "Go to Gym",
    Repeat: "Daily",
    Goal: "2 times daily",
    Time_of_Day: "Morning",
    Start_Date: "2023-06-13",
  },
  {
    id: uuid(),
    Habit_Name: "Code",
    Repeat: "Daily",
    Goal: "3 times daily",
    Time_of_Day: "Evening",
    Start_Date: "2023-01-12",
  },
];
