import { useState } from "react";
function HabitInput({ onAddHabit }) {
    const [Habit, setHabit] = useState('');

    const submithandle = (e)=>{
        e.preventDefault()
        if(Habit.trim()==='') return
           onAddHabit(Habit);
           setHabit('');
         }
     return (
       <form onSubmit={submithandle} >
        <input type="text" value={Habit} onChange={(e)=> setHabit(e.target.value)} />
        <button type="submit" disabled={!Habit.trim()} >Add Habit</button>
       </form>
    );
}
 
     
export default HabitInput;