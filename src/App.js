import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './user/signup';
import Login from './user/login';
import Profile from './user/profile';
import About from './user/about';
import Contact from './user/contact';
import Portfolio from './user/portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Profile />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
    </Routes>
    </>
  );
}

export default App;
