import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navbar';
import Homepage from './components/Homepage';
import AccomodationDetail from './components/AccomodationDetail';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>

    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/accom" element={<AccomodationDetail/>} />
      <Route path="/home" element={<h1>Home Page</h1>} />
    </Routes>

   </BrowserRouter>
  );
}

export default App;
