import React from 'react';

const Tasks = ({ task, handleDelete }) => {
  return (
    <li className="shadow-lg rounded-sm w-full p-4 flex justify-between items-center mb-2 bg-white hover:bg-gray-100 transition-colors duration-300">
      <span className="text-lg font-medium text-gray-800">
        {task.id}_{task.name}
      </span>
      <button
        className="bg-red-500 hover:bg-red-700 rounded-md text-white px-4 py-2 transition-colors duration-300"
        onClick={() => handleDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Tasks;
