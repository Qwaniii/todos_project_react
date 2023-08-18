import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteCheckedTask, task } from '../../storage/reducers/taskReducer'
import Link from '../Link/Link'

export default function Text() {
  const [inp, setInp] = useState("")
  const dispatch = useDispatch()
  const todo = useSelector(task)

  const func = () => {
    dispatch(addTask({todo: inp, checked: false}))
    setInp("")
  }

  const iputTodo = (e) => {
    setInp(e.target.value)
  }
  
  return (
    <div>
        <input placeholder='Введите задачу' value={inp} onChange={(e) => iputTodo(e)}></input>
        <button onClick={() => func()}>добавить</button>
        <Link name={"Удалить выбранные"} make={() => dispatch(deleteCheckedTask())}/>
    </div>
  )
}
