import React, { useState } from 'react'

function TodoForm() {
    
    const [value, setValue] = useState("");

    const handleChange = e => {
      setValue(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log('clicked')
      // or you can send data to backend
    };
   
    const handleKeypress = e => {
      if (e.keyCode === 13) {
       handleSubmit()
      }
    };
  return (
    <div>
        <form className='flex align justify-center items-center'>
        <div class="form-control">
  <div class="input-group">
    <input type="text" placeholder="Add task" class="input input-bordered w-full max-w-xs" 
    value={value}
          onChange={handleChange}
          onKeyPress={handleKeypress} />
    <button type='submit'   onClick={handleSubmit} class="btn btn-primary">
     Add task
    </button>
  </div>
</div>
            

        </form>
    </div>
  )
}

export default TodoForm