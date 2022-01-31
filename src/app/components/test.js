import React, { useState } from "react";

const Test = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [remainCount, setRemainCount] = useState(0);
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={() => (
          setList([...list, userInput]),
          setUserInput(""),
          setTaskCount(taskCount + 1),
          setRemainCount(remainCount + 1)
        )}
      >
        Add
      </button>
      <p>
        {remainCount} remaining out of {taskCount} tasks
      </p>
      <ul>
        {list.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};

export default Test;
