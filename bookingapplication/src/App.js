import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navbar';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>

    <Routes>
      <Route path="/" element={<h1>HomePage</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/home" element={<h1>Home Page</h1>} />
    </Routes>

   </BrowserRouter>
  );
}

export default App;
