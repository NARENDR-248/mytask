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
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    const delete_list = task.filter((res) => {
      return res.id !== id;
    });
    setTask(delete_list);
  };

  return (
    <div className="flex flex-col items-center mx-auto justify-center shadow-lg w-6/12 p-4 m-10">
      <h1 className="text-lg font-semibold border-neutral-700">Task List</h1>
      <button
        className="bg-red-700 rounded-md shadow-lg text-white px-3 py-2 mb-4"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      <ul className="w-full">
        {show && task.map((res) => {
          return (
            <li key={res.id} className="shadow-lg rounded-sm w-full p-6 flex justify-between mb-2">
              <span>
                {res.id}_{res.name}
              </span>
              <button
                className="bg-slate-500 rounded-md text-white p-2"
                onClick={() => handleDelete(res.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
