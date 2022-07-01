import React from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import { toast } from 'react-toastify'
import axios from 'axios'

function Com_task_card({task,index}) {
    const {taskData,_id,date} = task

    const deleteTask = () => {

        fetch(`https://fast-dawn-02990.herokuapp.com/tasks_complete/${_id}`,{
            method: 'delete',
        })
        .then(res => res.json()) 
        .then(data => toast.error('Task removed!')) 
    }
  return (
    <tr>
        <th>{index +1 }</th>
        <td>{date}</td>
        <td>{taskData}</td>
        <td> <button className='btn btn-outline btn-primary border-2 btn-sm update_btn' onClick={deleteTask}><RiDeleteBack2Fill/></button></td>
      </tr>
  )
}

export default Com_task_card