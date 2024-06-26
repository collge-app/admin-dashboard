import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Home/Dashboard"
import NavBar from './components/NavBar/NavBar.js';
import Sidebar from "./components/Sidebar/Sidebar.js"
import ReportSidebar from './components/Report-Sidebar/ReportSidebar.js';

function App()
{
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
      <ReportSidebar />
      <Sidebar />
     
      
    </>
  );
}

export default App;
