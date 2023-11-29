import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TopBar from './components/topbar/TopBar';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { useContext} from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/posts' element = {<Home />} />
        <Route path='/register' element = {user ? <Home /> : <Register/>} />
        <Route path='/login' element = {user ? <Home/> : <Login />} />
        <Route path='post/:id' element = {<Single />} />
        <Route  path = '/write' element = {user ? <Write /> : <Register />} />
        <Route path='/settings' element = {user ? <Setting /> : <Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
