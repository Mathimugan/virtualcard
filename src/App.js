import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}></Route>
      <Route path="/card/:id" element={<Card/>}></Route>
      <Route path="/card" element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
