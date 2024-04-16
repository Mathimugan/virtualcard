import './App.css';
import EmployeeForm from './components/Form';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/form" element={<EmployeeForm/>}></Route>
      <Route path="/card/:id" element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
