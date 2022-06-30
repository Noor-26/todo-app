import React from 'react'

function TodoTask() {
    const taskComplete = () => {
        console.log('completed')
    }
  return (
    <div class="flex mb-4 items-center">
               <input type="checkbox"  class="checkbox border-2 checkbox-primary" onClick={taskComplete}/>
    </div>
  )
}

export default TodoTask