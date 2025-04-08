import React, { useEffect, useState } from "react";

const DashboardInventory = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("inventoryTasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Список завдань</h2>
      {tasks.length === 0 ? (
        <p>Немає збережених завдань.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="border rounded p-4 mb-4">
            <p><strong>Об'єкт:</strong> {task.object}</p>
            <p><strong>Дата:</strong> {task.date}</p>
            <p><strong>Тип:</strong> {task.type}</p>
            <p><strong>Команда:</strong> {task.team}</p>
            <p><strong>Статус:</strong> {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DashboardInventory;