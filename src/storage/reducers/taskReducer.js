import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            todo: "task1",
            checked: false
        },
        {
            todo: "task2",
            checked: false
        },
        {
            todo: "task3",
            checked: false
        },
    ]
} 

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload)
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((task, index) => task.todo[index] !== task.todo[action.payload])
        },
        chechedTask(state, action) {
            state.tasks = state.tasks.map((task, index) => (task.todo[index] === task.todo[action.payload]) ? task.checked === !task.checked : task.checked )
        }

    }
})

export const { addTask , deleteTask, checkedTask } = taskSlice.actions

export const task = (state) => state.task.tasks
export const check = (state) => state.task.tasks.checked

export default taskSlice.reducer