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
import Requireauth from './Components/shared/Requireauth/Requireauth';
import Footer from './Components/shared/Footer/Footer';
function App() {
  const [selected, setSelected] = useState()

  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path='/' element={
        <Requireauth>
          <Home selected={selected} setSelected={setSelected}/>
        </Requireauth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/com_task' element={<Requireauth>
          <Comp_task/>
        </Requireauth>}/>
        <Route path='/calendar' element={<Calendar selected={selected} setSelected={setSelected} />}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
