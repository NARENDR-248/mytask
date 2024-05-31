
import "./App.css";
import Addtask from "./components/Addtask";

import Footeer from "./components/Footeer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);
 

  return (
    <>
    <Header />
    <Addtask tasks={tasks} setTasks={setTasks}/>
    <TaskList tasks={tasks} setTasks={setTasks} />
    <Footeer />
   
    </>
    
  );
}

export default App;
