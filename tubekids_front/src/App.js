import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import AdminKids from './Components/AdminKids/AdminKids.jsx' 
import AdminVideos from './Components/AdminVideos/AdminVideos.jsx'
import Watch from './Components/Watch/Watch'
import Home from './Components/Home/Home'
import CreateVideo from './Components/AdminVideos/CreateVideo/CreateVideo'
import CreateKids from './Components/AdminKids/CreateKids/CreateKids'
import EditVideo from './Components/AdminVideos/UpdateVideo/Update'
import EditProfile from './Components/AdminKids/UpdateKids/UpdateKids'


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminKids" element={<AdminKids />} />
          <Route path="/adminVideos" element={<AdminVideos />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createVideo" element={<CreateVideo />} />
          <Route path="/createKids" element={<CreateKids />} />
          <Route path="/editVideo" element={<EditVideo />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
