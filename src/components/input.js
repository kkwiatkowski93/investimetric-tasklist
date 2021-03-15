import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTask } from '../features/taskSlice'

import './input.css'

import highPriorityIcon from './../images/high.png'
import normalPriorityIcon from "./../images/normal.png";
import lowPriorityIcon from "./../images/low.png";

function Input() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('High');
    const [date, setDate] = useState('');
    const [showMore, setShowMore] = useState('hideMore')

    const dispatch = useDispatch()

    const addTask = () => {

        if (title === '' || description === '' || date === '') {
          alert('Something went wrong: Please fill all the fields.')
        } else {
          dispatch(
            saveTask({
              id: Date.now(),
              title: title,
              description: description,
              date: date,
              priority: priority
            })
          );
        }

    }

    const showForm = () => {
      if (showMore === 'showMore') {
        setShowMore("hideMore");
      } else {
        setShowMore("showMore");
      }
    }

    return (
      <div className={"formContainer " + showMore}>
        {/* Title input */}
        <input
          className="titleInput"
          type="text"
          name="title"
          placeholder="New task title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="showMoreButton" onClick={showForm}>
          Add new +
        </button>

        {/* Description input */}
        <div className="descriptionInput__container">
          <label for="descriptionInput">Task Description:</label>

          <textarea
            id="descriptionInput"
            class="descriptionInput"
            name="descriptionInput"
            rows="4"
            cols="50"
            onChange={(e) => setDescription(e.target.value)}
          >
            Type your task description...
          </textarea>
        </div>

        {/* Priority inputs */}
        <div className="priorityContainer">
          <label>Priority:</label>
          <input
            type="radio"
            name="choice"
            id="highPriority"
            value="High"
            onChange={(e) => setPriority(e.target.value)}
          />
          <label for="highPriority">
            <img src={highPriorityIcon} alt="highPriority"/>
          </label>

          <input
            type="radio"
            name="choice"
            id="normalPriority"
            value="Normal"
            onChange={(e) => setPriority(e.target.value)}
          />
          <label for="normalPriority">
            <img src={normalPriorityIcon} alt="normal-priority"/>
          </label>

          <input
            type="radio"
            name="choice"
            id="lowPriority"
            value="Low"
            onChange={(e) => setPriority(e.target.value)}
          />
          <label for="lowPriority">
            <img src={lowPriorityIcon} alt="low-priority"/>
          </label>
        </div>

        {/* Input for date */}
        <div className="dateContainer">
          <label for="dueDate">Due date:</label>
          <input
            type="date"
            id="dueDate"
            name="due-date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="addTaskButton" onClick={addTask}>
          Accept
        </button>
      </div>
    );
}

export default Input;