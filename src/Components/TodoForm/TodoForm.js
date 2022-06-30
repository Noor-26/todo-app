import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TodoTask from '../TodoTask/TodoTask';
import axios from 'axios'
function TodoForm() {
    const [user] = useAuthState(auth)
    const [value, setValue] = useState("");

    const handleChange = e => {
      setValue(e.target.value);
    };
    
    const handleSubmit = e => {
      e.preventDefault();
     const task = {
        email: user.email,
        taskData : value
     }
     console.log(task)
     axios.post(`http://localhost:5000/tasks`,task)  
     .then(data => console.log(data))
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
            <TodoTask/>
        </div>
    </div>

</form>
    </div>
  )
}

export default TodoForm
{/* <input type="text" placeholder="Add" class="input input-bordered w-full max-w-xs" 
value={value}
      onChange={handleChange}
      onKeyPress={handleKeypress} />
<button type='submit'   onClick={handleSubmit} class="btn btn-primary">
 Add task
</button> */}