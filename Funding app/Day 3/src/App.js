import './App.css';
import { BrowserRouter,Routes, Route, Navigate, useLocation } from "react-router-dom";

import LoginPage from './LoginPage';
import Home from './Home';
import Signup from './Signup';
// import Signup from './Signup';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

// {location.pathname === "/" && <Navigate to="/signup" replace={true} />}
// <Route path="/" element={<Login/>} />
// <Route path="/signup" element={<SignUp/>} />