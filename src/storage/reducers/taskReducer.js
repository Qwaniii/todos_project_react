import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        // {
        //     todo: "task1",
        //     checked: true
        // },
        // {
        //     todo: "task2",
        //     checked: false
        // },
        // {
        //     todo: "task3",
        //     checked: false
        // },
    ]
} 

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload)
            sessionStorage.setItem("tasksStorage", state.tasks)
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload)
        },
        checkedTask(state, action) {
            state.tasks = state.tasks.map((task, index) => (index === action.payload) ? {...task, checked: !task.checked} : task )
        },
        deleteCheckedTask(state) {
            state.tasks = state.tasks.filter((task) => task.checked !== true)
        }

    }
})

export const { addTask , deleteTask, checkedTask, deleteCheckedTask } = taskSlice.actions

export const task = (state) => state.task.tasks
export const check = (state) => state.task.tasks.checked

export default taskSlice.reducer