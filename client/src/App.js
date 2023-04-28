import React, { Components } from'react';
import './App.css';
import useFetch from './hook/useFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PopularJobs from "./pages/PopularJobs";
import UserProfile from './pages/UserProfile'
import ResponsiveAppBar from './components/navbar';


function App() {
 
  return (

    
    <BrowserRouter>
    <Routes>


    <Route path="/" element={<Home /> } />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/UserProfile" element={<UserProfile />} />
    <Route path="/profile" element={<Profile />} />

    </Routes>
    </BrowserRouter>
    
  );
  // render () ;
  //   return (
  //     <div>
  //       <ResponsiveAppBar />
  //     </div>
  //   );
  }


export default App;
