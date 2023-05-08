// todo

import { useState } from "react";

function ToDo() {
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    const newToDo = {
      id: tasks.length + 1,
      desc: input,
    };
    setTask([...tasks, newToDo]);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const tasksElements = tasks.map((task) => (
    <div key={task.id} className="task">
      <span>{task.id}</span>
      <span>{task.description}</span>
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </div>
  ));

  return (
    <>
      <div className="add-task">
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSubmit}>add</button>
      </div>
      <div className="tasks">{tasksElements}</div>
    </>
  );
}

export default ToDo;
