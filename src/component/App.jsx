import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login/login';
import ProtectedRoutes from './navigation/protectedRoutes/ProtectedRoutes';

function App() {

  const [userLogin, setUserLogin] = useState();

  return (
    userLogin ? 
      <ProtectedRoutes data={userLogin} handleLogin={setUserLogin} /> : 
      <Routes>
        <Route path="/" element={<Login handleLogin={setUserLogin}/>}/>
      </Routes>
  )
}

export default App
