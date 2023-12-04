import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import LocationService from "./components/LocationService";
import './scss/web/app.web.scss'
import './scss/web/login.web.scss'
import './scss/web/signup.web.scss'

function App() {
  return (
      <>
        <LocationService />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
      </>
  );
}

export default App;
