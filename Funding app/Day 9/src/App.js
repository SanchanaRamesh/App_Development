import './App.css';
import { BrowserRouter,Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import About from './About';
import Payment from './Payment';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Analysis from './Analysis'
import Admin from './Admin'
import Help from './Help'
import Payment1 from './Payment1';
import Payment2 from './Payment2';
import Project from './Project';
import TermsAndCondition from './TermsAndCondition';
import Privacypolicy from './Privacypolicy';
import Home from './Home';
import Faq from './Faq';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/sidebar' element={<Sidebar/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/payment1' element={<Payment1/>}/>
    <Route path='/payment2' element={<Payment2/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/dashboard2' element={<Dashboard2/>}/>
    <Route path='/analysis' element={<Analysis/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path = '/help' element={<Help/>}/>
    <Route path = '/Project' element={<Project/>}/>
    <Route path = '/TermsAndCondition' element={<TermsAndCondition/>}/>
    <Route path = '/Privacypolicy' element={<Privacypolicy/>}/>
    <Route path = '/' element={<Home/>}/>
    <Route path = '/Faq' element={<Faq/>}/>
    

    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;