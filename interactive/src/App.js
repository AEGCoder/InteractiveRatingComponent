import React,{useState} from 'react';
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

   const [selected, setSelected] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage selected={selected} setSelected={setSelected} />} />
        <Route path="/result" element={<ResultPage selected={selected}  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
