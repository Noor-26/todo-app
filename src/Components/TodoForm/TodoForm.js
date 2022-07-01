import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TodoTask from '../TodoTask/TodoTask';
import axios from 'axios'
function TodoForm() {
    const [user] = useAuthState(auth)
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editData, setEditData] = useState('')

    useEffect(() => {
      if(user?.email){
        axios(`http://localhost:5000/tasks?email=${user.email}`)
        .then(data => setTasks(data.data))
      }
    }, [user,value,tasks])
    useEffect(() => {
      if(editData){
        setValue(editData.taskData ? editData.taskData : '' ) 
      }
    }, [editData])
    
    const handleChange = e => {
      setValue(e.target.value);
    };
    const updateTask = (data) => {
     
      setEditData(data) 
    }
    const handleSubmit = e => {
      e.preventDefault();
     const task = {
        email: user.email,
        taskData : value
     }
     if(!editData){
       axios.post(`http://localhost:5000/tasks`,task)  
       .then(data => console.log(data))
     }
     else{
      axios.patch(`http://localhost:5000/tasks/${editData._id}`,task)
     }
     setValue('')
    };
    
    const handleKeypress = e => {
      if (e.keyCode === 13) {
        handleSubmit()

      }
    };
  return (
    <div >
        <div class="h-100  w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="rounded shadow  p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <form class="mb-4">
            <div class="flex mt-4">
                <input class=" input input-bordered rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" 
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeypress} />
                
                <button class="btn btn-primary m-0" type='submit' onClick={handleSubmit} >Add</button>
            </div>
        </form>
        <div>
            {tasks.map(task => <TodoTask task={task} updateTask={updateTask}/>)}
        </div>
    </div>

</div>
    </div>
  )
}

export default TodoForm
