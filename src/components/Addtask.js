import React, { useState } from 'react';

const Addtask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const subhandel = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress)
    };
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <div className='max-w-lg w-full shadow-xl p-8 flex justify-center items-center mx-auto mt-10 bg-white rounded-lg animate-fade-in'>
      <form className='flex flex-col items-start w-full space-y-4' onSubmit={subhandel}>
        <label className='text-lg font-bold mb-2' htmlFor='task'>Add Task:</label>
        <input 
          type='text' 
          placeholder='Add task' 
          name='task' 
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          className='w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-500 ease-in-out transform hover:scale-105'
        />
        <label className='text-lg font-bold mb-2' htmlFor='progress'>Progress:</label>
        <select 
          onChange={(e) => setProgress(e.target.value === "true")} 
          value={progress} 
          className='w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-500 ease-in-out transform hover:scale-105'
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <div className='flex justify-between w-full space-x-4'>
          <button 
            type='button'
            onClick={handleReset}
            className='bg-gray-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-105 hover:shadow-lg'
          >
            Reset
          </button>
          <button 
            type='submit' 
            className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-md shadow-md hover:shadow-xl hover:bg-gradient-to-l transform hover:rotate-3 transition duration-300 ease-in-out'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addtask;
