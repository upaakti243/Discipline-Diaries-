import { useState } from "react";

export default function DisciplineDiaries() {
  const [weekGoals, setWeekGoals] = useState({
    studyHours: 40,
    studyTasks: [
      "Complete all Modern History videos",
      "Read Modern History NCERT",
      "5 chapters of 'India: Physical Environment' (Geography)",
      "Complete 'Know Your Country' module",
    ],
    fitness: [
      "4 main workouts",
      "1 stretch/mobility day",
      "1 bodyweight workout",
      "1 Sunday 5K run",
      "3–4 cardio sessions (30 min)",
    ],
    meditation: "5 days × 10 minutes",
    food: [
      "6 clean eating days (protein + fibre, low calorie)",
      "1 sweet treat per day",
    ],
    reading: "70+ pages (e.g., Sapiens)",
    focusWord: "Mini steps",
  });

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center">Discipline Diaries – Week 1</h1>

      <div className="section">
        <h2 className="text-xl font-semibold">📘 Study Goals ({weekGoals.studyHours} hrs)</h2>
        <ul>
          {weekGoals.studyTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="text-xl font-semibold">💪 Fitness Goals</h2>
        <ul>
          {weekGoals.fitness.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="text-xl font-semibold">🧘 Meditation</h2>
        <p>{weekGoals.meditation}</p>
      </div>

      <div className="section">
        <h2 className="text-xl font-semibold">🍽️ Nutrition</h2>
        <ul>
          {weekGoals.food.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2 className="text-xl font-semibold">📖 Book Reading</h2>
        <p>{weekGoals.reading}</p>
      </div>

      <div className="section">
        <h2 className="text-xl font-semibold">💡 Focus Word</h2>
        <p><strong>{weekGoals.focusWord}</strong> – small consistent actions each day</p>
      </div>
    </div>
  );
}
