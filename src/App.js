import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUsers from './pages/ListUsers';
import UserDetails from "./pages/UserDetails"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ListUsers />} />
        <Route path='/user/:username' element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
