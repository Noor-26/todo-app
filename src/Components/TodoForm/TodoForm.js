import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TodoTask from '../TodoTask/TodoTask';
import axios from 'axios'
function TodoForm() {
    const [user] = useAuthState(auth)
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      if(user?.email){
        axios(`http://localhost:5000/tasks?email=${user.email}`)
        .then(data => setTasks(data.data))
      }
    }, [user,value,tasks])
    
    const handleChange = e => {
      setValue(e.target.value);
    };
    
    const handleSubmit = e => {
      e.preventDefault();
     const task = {
        email: user.email,
        taskData : value
     }
     axios.post(`http://localhost:5000/tasks`,task)  
     .then(data => console.log(data))
     setValue('')
    };
    
    const handleKeypress = e => {
      if (e.keyCode === 13) {
        handleSubmit()

      }
    };
  return (
    <div>
        <form class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <div class="flex mt-4">
                <input class=" input input-bordered rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" 
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeypress} />
                
                <button class="btn btn-primary m-0" type='submit' onClick={handleSubmit} >Add</button>
            </div>
        </div>
        <div>
            {tasks.map(task => <TodoTask task={task}/>)}
        </div>
    </div>

</form>
    </div>
  )
}

export default TodoForm
