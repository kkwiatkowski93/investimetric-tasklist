import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskList: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        saveTask: (state, action) => {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(action.payload)
            };

            fetch("http://localhost:8000/taskList", requestOptions)
                .then((response) => response.json())
                .then((data) => console.log(data));

            state.taskList.push(action.payload);
        }
    }
});

export const { saveTask } = taskSlice.actions;

export const selectTaskList = state => state.tasks.taskList

export default taskSlice.reducer