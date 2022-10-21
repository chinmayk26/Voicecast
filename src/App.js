import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/homepage';
import Audio_Book from './pages/AudioBook/AudioBook';
=======
import Home from './pages/Homepage/homepage';
import Audio_Book from './pages/audiobook';
>>>>>>> 5255b53b3bf3c703ec6c963cc35d8b3bb1079e69
import Video_Book from './pages/videobook';
import SignUp from './pages/signup';
import LiveRoom from './pages/LiveRooms/LiveRooms';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/homepage'  element={<Home/>} />
        <Route path='/audiobook' element={<Audio_Book/>} />
        <Route path='/videobook' element={<Video_Book/>} />
        <Route path='/liveroom' element={<LiveRoom/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;