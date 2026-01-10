import { AnimatePresence, motion } from "framer-motion";
import HabitItem from "./HabitItem";

function HabitList({ habits, onDeleteHabit, onToggleHabit }) {
  if (habits.length === 0) {
    return <p>No habits yet. Add one above 👆</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      <AnimatePresence>
        {habits.map((habit) => (
          <motion.li
            key={habit.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 0",
            }}
          >
            <HabitItem
              habit={habit}
              onDeleteHabit={onDeleteHabit}
              onToggleHabit={onToggleHabit}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default HabitList;
