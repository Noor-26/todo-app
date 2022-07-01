import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Navber from './Components/Navber/Navber';
import 'react-toastify/dist/ReactToastify.css'; 
import Comp_task from './Components/Comp_task/Comp_task';
import Calendar from './Components/Calendar/Calendar';
import { useState } from 'react';
function App() {
  const [selected, setSelected] = useState()

  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/com_task' element={<Comp_task selected={selected}/>}/>
        <Route path='/calendar' element={<Calendar selected={selected} setSelected={setSelected} />}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
