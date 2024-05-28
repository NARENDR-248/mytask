import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      name: "nani",
      completed: false,  // Fixed typo: "complited" to "completed"
    },
    {
      id: 2,
      name: "naninarendra",
      completed: false,  // Fixed typo: "complited" to "completed"
    },
    {
      id: 3,
      name: "naninaren",
      completed: false,  // Fixed typo: "complited" to "completed"
    },
  ]);

  const handleDelete = (id) => {
    const delete_list = task.filter((res) => {
      return res.id !== id;
    });
    setTask(delete_list);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {task.map((res) => {
          return (
            <li key={res.id}>
              <span>
                {res.id}_{res.name}
              </span>
              <button onClick={() => handleDelete(res.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
