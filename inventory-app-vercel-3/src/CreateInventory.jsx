import React, { useState } from "react";

const CreateInventory = () => {
  const [object, setObject] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [team, setTeam] = useState("");

  const handleSave = () => {
    const task = { object, date, type, team, status: "Очікує підтвердження" };
    const existing = JSON.parse(localStorage.getItem("inventoryTasks")) || [];
    localStorage.setItem("inventoryTasks", JSON.stringify([...existing, task]));
    setObject(""); setDate(""); setType(""); setTeam("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Створення інвентаризації</h2>
      <div>
        <label>Об'єкт: </label>
        <input value={object} onChange={(e) => setObject(e.target.value)} className="border rounded px-2 py-1" />
      </div>
      <div>
        <label>Дата інвентаризації: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded px-2 py-1" />
      </div>
      <div>
        <label>Тип інвентаризації: </label>
        <input value={type} onChange={(e) => setType(e.target.value)} className="border rounded px-2 py-1" />
      </div>
      <div>
        <label>Команда / Підрядник: </label>
        <input value={team} onChange={(e) => setTeam(e.target.value)} className="border rounded px-2 py-1" />
      </div>
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Зберегти завдання</button>
    </div>
  );
};

export default CreateInventory;