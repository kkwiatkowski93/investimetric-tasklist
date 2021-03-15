import React, { useState } from 'react'

import './taskItem.css'

import highPriorityIcon from "./../images/high.png"
import normalPriorityIcon from "./../images/normal.png"
import lowPriorityIcon from "./../images/low.png"

function TaskItem({ title, description, date, priority }) {
  const [isVisible, setIsVisible] = useState('notVisible');

  return (
    <div
      className={"taskItem " + isVisible}
      onClick={() => {
        if (isVisible === 'notVisible') {
          setIsVisible("isVisible");
        } else {
          setIsVisible("notVisible");
        }
      }}
    >
      {/* Show correspondding image to priority */}
      {priority === "High" && (
        <img src={highPriorityIcon} alt="high-priority" />
      )}
      {priority === "Normal" && (
        <img src={normalPriorityIcon} alt="normal-priority" />
      )}
      {priority === "Low" && (
        <img src={lowPriorityIcon} alt="low-priority" />
      )}

      <div className="taskItemTitle">{title}</div>
      <div className="taskItemDate">{date}</div>
      <div className="taskItemDescription">{description}</div>
    </div>
  );
}

export default TaskItem;