
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userLogin';
import AdminPortal from './Components/adminPortal';
import UserPortal from './Components/userPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin/>} />
        
        <Route path="/user-login" element={<UserLogin/>} />
        <Route path='/admin-portal/*' element={<AdminPortal />} />
        <Route path='/user-portal/*' element={<UserPortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
