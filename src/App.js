import logo from './logo.svg';
import './App.css';
import LoginAdmin from './components/LoginAdmin';
import LoginUser from './components/LoginUser';
import Home from './components/Navbar';
import Homepage from './components/Homepage';
import { Routes, Route, Redirect } from "react-router-dom"
function App() {
 

    return (
    
    <>
   
    <div className='container'>
     
      <Routes>

        <Route path='/' element={<Homepage/>} />
        <Route path='/loginuser' element={<LoginUser/>} />
        <Route path='/loginadmin' element={<LoginAdmin/>} />
        <Route path='/location' element={<LoginAdmin/>} />
      </Routes>
    </div>
  
    </>
    )
}

export default App;
