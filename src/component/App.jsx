import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useStoreLogIn } from './hooks/useStore/useStore';
import Login from './pages/login/login';
import ProtectedRoutes from './navigation/protectedRoutes/ProtectedRoutes';

function App() {

  const userLoged = useStoreLogIn(state => state.loggedIn)

  return (
    userLoged ? 
      <ProtectedRoutes/> : 
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
  )
}

export default App
