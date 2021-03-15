import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import Input from './components/input';
import TaskItem from './components/taskItem'
import { selectTaskList } from './features/taskSlice'

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const newTask = useSelector(selectTaskList);

  const [dbTaskList, setDbTaskList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      await fetch("http://localhost:8000/taskList", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setDbTaskList(data);
          setIsLoaded(true);
        });
    };

    fetchData();
  }, [setDbTaskList]);

  return (
    <div className="App">
      <div className="app__container">
        <Input />

        <div className="app__taskContainer">
          <div className="taskListTitle">
            Task list:
          </div>

          {/* Show loader until data is loaded */}
          {isLoaded ? (
            ""
          ) : (
            <Loader type="Puff" color="#1151f2" height={70} width={70} />
          )}

          {/* Show items from database */}
          {dbTaskList.map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              priority={item.priority}
              date={item.date}
            />
          ))}

          {/* Show new tasks */}
          {newTask.map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              priority={item.priority}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;