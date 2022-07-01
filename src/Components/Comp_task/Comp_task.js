import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import axios from 'axios'
import Loading from '../shared/Loading/Loading'
import Com_task_card from './Com_task_card'
import { format } from 'date-fns';

function Comp_task() {
    const [user,loading] = useAuthState(auth)
    const [tasks, setTasks] = useState([])
   const email = user?.email
    useEffect(() => {
        if(email){
            fetch(`https://fast-dawn-02990.herokuapp.com/tasks_complete?email=${email}`)
            .then(res => res.json())
            .then(data => setTasks(data)) 
        }
    }, [user,tasks])

    if(loading){
        return <Loading/>
    }
  return (
    <div>
        <h2 className='text-5xl text-center mt-3'>Completed tasks</h2>
        <div className="overflow-x-auto my-5">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Added Time</th>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {tasks.map((task,index) => <Com_task_card task={task} index={index}/>)}
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Comp_task