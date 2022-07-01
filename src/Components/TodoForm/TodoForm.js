import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TodoTask from '../TodoTask/TodoTask';
import axios from 'axios'
import moment from 'moment';
import { toast } from 'react-toastify';
function TodoForm() {
  const [user] = useAuthState(auth)
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editData, setEditData] = useState('')
  const date = moment().format('lll');

  useEffect(() => {
    if (user?.email) {
      axios(`https://fast-dawn-02990.herokuapp.com/tasks?email=${user.email}`)
        .then(data => setTasks(data.data))
    }
  }, [user, value, tasks])

  useEffect(() => {
    if (editData) {
      setValue(editData.taskData ? editData.taskData : '')
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
      date: date,
      email: user.email,
      taskData: value
    }

    if (!editData) {
      axios.post(`https://fast-dawn-02990.herokuapp.com/tasks`, task)
        .then(data => toast.success('task added'))
    }
    else {
      axios.patch(`https://fast-dawn-02990.herokuapp.com/tasks/${editData._id}`, task).then(data => {
        toast.success('task updated')
        setEditData('')
      })
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
      <div className="todo-container  w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="rounded shadow  p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <form className="mb-4">
            <div className="flex mt-4">
              <input className=" input input-bordered rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeypress} />

              <button className="btn btn-primary hover:border-primary border-2 hover:bg-transparent hover:text-white m-0" type='submit' onClick={handleSubmit} >Add</button>
            </div>
          </form>
          <div>
            {tasks.map(task => <TodoTask task={task} updateTask={updateTask}  />)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default TodoForm
