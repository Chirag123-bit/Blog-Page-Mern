import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navbar';
import Homepage from './components/Homepage';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>

    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/home" element={<h1>Home Page</h1>} />
    </Routes>

   </BrowserRouter>
  );
}

export default App;
