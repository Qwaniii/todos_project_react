import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { check, checkedTask, deleteTask, task } from '../../storage/reducers/taskReducer'


export default function Tasks() {
  const tasks = useSelector(task)
  const checkbox = useSelector(check)
  const dispatch = useDispatch()
  return (
    <div>
        {tasks.map((task, index) => (
            <div key={index}>
              <input type="checkbox" onChange={(e) => dispatch(checkedTask(index))}></input>
              {task.todo}
              <button onClick={() => dispatch(deleteTask(index))}>удалить</button>
            </div>
        ))}
    </div>
  )
}
