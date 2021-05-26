import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [title, setTitle] = useState("");
  const [milestone, setMilestone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTitle("");
    // setMilestone("");
  };

  return (
    <div className="mainApp">
      <div class="nogoals">You have no goals left for this year!</div>
      <p>{title}</p>
      <p>{milestone}</p>
      <form>
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Goal Milestone"
          value={milestone}
          onChange={(e) => setMilestone(e.target.value)}
        />
        <input type="submit" value="Add Goal" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Main;
