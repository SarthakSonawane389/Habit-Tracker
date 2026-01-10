
import HabitInput from './components/HabitInput';
import { useEffect } from 'react';
import HabitList from './components/HabitList';
import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
       const [habits,sethabits] = useState(()=>{
        const storedhabits = localStorage.getItem("habits")
        return storedhabits ? JSON.parse(storedhabits) : []
       });

      useEffect(()=>{
        localStorage.setItem("habits",JSON.stringify(habits)),[habits]
      })

    const addhabit = (habitname)=>{
      const newhabit = {
        id : Date.now(),
        name : habitname,
        completedToday : false,
      }
      sethabits([...habits,newhabit]);
    }
   const deletehabit = (deletebyid)=>{
    const updatedhabits = habits.filter(habit => habit.id !== deletebyid)
    sethabits(updatedhabits);
  } 
  const togglehabit = (togglebyid)=>{
    const updatedhabits = habits.map(habits => habits.id === togglebyid ? {...habits,completedToday: !habits.completedToday} : habits 

    );
    sethabits(updatedhabits);
  }
 return (
    <div className='app'>
      <div>
        <h1>Habit Tracker</h1>
      </div>
      <HabitInput onAddHabit={addhabit}/>
      <HabitList habits={habits} onDeleteHabit={deletehabit} onToggleHabit={togglehabit}/>
      
    </div>
  )
}

export default App;
