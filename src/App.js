import React, { useState } from "react";
import "./styles.css";

function ToDoApp() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [mark, setmark] = useState("");
  const [sortOrder, toggleSortOrder] = useState(true);

  const Add = () => {
    let playerObj = { name: name, score: parseInt(mark) };

    setList([...list, playerObj]);
    setName("");
    setmark("");
  };

  const Remove = (index) => {
    let newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const Sort = () => {
    let sortedList = [...list].sort((a, b) =>
      sortOrder ? a.score - b.score : b.score - a.score
    );
    setList(sortedList);
    toggleSortOrder(!sortOrder);
  };

  return (
    <div className="container">
      <h2>Board of Scorers</h2>
      <div style={{ margin: "10px 0", padding: "5px", display: "block" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ marginRight: "5px", padding: "8px" }}
        />
        <input
          value={mark}
          onChange={(e) => setmark(e.target.value)}
          placeholder="Score"
          type="number"
        />
        <button onClick={Add} style={{ marginLeft: "5px" }}>
          Add
        </button>
      </div>

      <table className="simpleTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th className="sortable" onClick={Sort}>
              Score {sortOrder ? "⬆" : "⬇"}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.score}</td>
              <td>
                <button onClick={() => Remove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoApp;
