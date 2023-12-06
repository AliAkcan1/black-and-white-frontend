import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import './scss/web/app.web.scss'

function App() {
  return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
      </>
  );
}

export default App;
