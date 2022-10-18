import './App.css';
import Movie from './Components/Movie';
import Tickets from './Components/Tickets';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Movie/>}></Route>
        <Route path='/tickets' element={<Tickets/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
