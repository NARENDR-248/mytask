import React, { useState } from "react";
import Tasks from "./Tasks";


const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    const deleteList = tasks.filter((res) => res.id !== id);
    setTasks(deleteList);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center shadow-2xl w-6/12 p-4 m-10 bg-white rounded-lg">
        <div className="flex justify-between w-full mb-4">
          <h1 className="text-lg font-semibold border-neutral-700">Task List</h1>
          <button
            className="bg-slate-800 rounded-md shadow-lg text-white px-3 py-2"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {show && (
          <ul className="w-full">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Tasks key={task.id} task={task} handleDelete={handleDelete} />
              ))
            ) : (
              <p className="text-center text-gray-500">No tasks available</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
