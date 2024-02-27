import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/Login' element={<Login />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
