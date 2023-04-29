
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';

import JobSearch from './search/[id]'
import JobDetails from './job-details/[id]';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/search/:id" element={<JobSearch/>}/>
    <Route path ="/job-details/:id" element={<JobDetails/>}/>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
