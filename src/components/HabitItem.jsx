function HabitItem({ habit, onDeleteHabit, onToggleHabit }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <input
          type="checkbox"
          checked={habit.completedToday}
          onChange={() => onToggleHabit(habit.id)}
          style={{ margin: 0 }}
        />

        <span
          style={{
            textDecoration: habit.completedToday ? "line-through" : "none",
          }}
        >
          {habit.name}
        </span>
      </div>

      <button
        style={{ cursor: "pointer" }}
        onClick={() => onDeleteHabit(habit.id)}
      >
        Delete
      </button>
    </>
  );
}

export default HabitItem;
