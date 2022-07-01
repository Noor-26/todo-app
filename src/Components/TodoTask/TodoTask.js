import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import axios from 'axios'
import { toast } from 'react-toastify'
 

function TodoTask({task,updateTask}) {
    const {taskData,_id} = task
    const taskComplete = () => {
        axios.post(`https://fast-dawn-02990.herokuapp.com/tasks_complete/${_id}`,task) .then(data => toast.success('Task Completed')) 
    }   
    const deleteTask = () => {
        axios.delete(`https://fast-dawn-02990.herokuapp.com/tasks/${_id}`)
        .then(data => toast.error('Task Deleted!')) 
    }
    
  return (
    <div className="flex mb-4 items-center">
               <input type="checkbox"  className="checkbox border-2 checkbox-primary" onClick={taskComplete}/> <span className='ml-5'>{taskData}</span> <div className='ml-auto '>
                <button className='btn btn-outline btn-primary border-2 btn-sm mr-2' type='button' onClick={()=> updateTask(task)}><BiEdit/></button>
               <button className='btn btn-outline btn-primary border-2 btn-sm update_btn' onClick={deleteTask}><RiDeleteBack2Fill/></button>
                </div>
    </div>
  )
}

export default TodoTask