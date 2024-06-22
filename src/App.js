import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Home/Dashboard"
import NavBar from './components/NavBar/NavBar';

import Sidebar from "./components/Sidebar/Sidebar.js"


function App()
{
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
      <Sidebar />
    </>
  );
}

export default App;
