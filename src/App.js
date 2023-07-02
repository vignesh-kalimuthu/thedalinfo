import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Calender } from './component/calender.js';
import { Banner } from './component/banner.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/calendar" element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
