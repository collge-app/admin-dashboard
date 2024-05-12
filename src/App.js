import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Home/Dashboard"

function App()
{
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
