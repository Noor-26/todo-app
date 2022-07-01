import React from 'react'
import TodoForm from '../TodoForm/TodoForm'

function Home({selected}) {
  return (
    <div>
      <TodoForm selected={selected}/>
    </div>
  )
}

export default Home