import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { check, checkedTask, deleteTask, task } from '../../storage/reducers/taskReducer'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Tasks() {
  const tasks = useSelector(task)
  const checkbox = useSelector(check)
  const dispatch = useDispatch()
  return (
    <div className='main'>
        {tasks.map((task, index) => (
            <div key={task.todo + index + task.checked}>
              <input type="checkbox" defaultChecked={task.checked} onChange={(e) => dispatch(checkedTask(index))}></input>
              {task.todo}
              <button className='btn'  onClick={
                () => dispatch(deleteTask(index))
                }><DeleteOutlineOutlinedIcon /></button>
            </div>
        ))}
    </div>
  )
}
