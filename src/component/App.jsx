import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useStoreUser } from './hooks/store/useStoreUser/useStoreUser';
import Login from './pages/login/login';
import ProtectedRoutes from './navigation/protectedRoutes/ProtectedRoutes';

function App() {

  const userLoged = useStoreUser(state => state.loggedIn)

  return (
    userLoged ? 
      <ProtectedRoutes/> : 
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
  )
}

export default App
