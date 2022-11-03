import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Homepage/homepage';
import Audio_Book from './pages/audiobook';
import Video_Book from './pages/videobook';
import SignUp from './pages/signup';
import LiveRoom from './pages/live_room';
import Profile from './pages/profile';
  
function App() {
return (
    <Router>
    <Navbar islogin={{login:false}}/>
    <Routes>
        <Route exact path='/' exact element={<Home/>} />
        <Route path='/homepage'  element={<Home/>} />
        <Route path='/audiobook' element={<Audio_Book/>} />
        <Route path='/videobook' element={<Video_Book/>} />
        <Route path='/liveroom' element={<LiveRoom/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </Router>
);
}
  
export default App;