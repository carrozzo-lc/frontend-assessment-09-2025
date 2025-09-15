'use client';
import { useState } from 'react';
// components
import Divider from '@ui/Divider';

// ----------------------------------------------------------------------

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const updatedTasks = [
      ...tasks,
      { id: Date.now(), text: newTask.trim(), completed: false },
    ];

    setTasks(updatedTasks);
    setNewTask('');
  };

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="mx-auto max-w-xl">
      <h3 className="mb-3">Add tasks to your list</h3>

      <div className="mb-4 flex gap-4">
        <div className="flex-grow">
          <input
            id="task"
            name="task"
            type="text"
            placeholder="Add a new task"
            onChange={handleInputChange}
            value={newTask}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
        <button
          type="button"
          onClick={addTask}
          className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Task
        </button>
      </div>

      <Divider text="Tasks" />

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`mt-4 w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4 ${task.completed ? 'underline opacity-50' : 'hover:bg-gray-50'} `}
          >
            <span className="font-semibold">{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
