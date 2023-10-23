import './App.css';
import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import NavBar from '../component/navbar';
import HomePage from '../pages/home/home';
import LobbyPage from '../pages/lobby/lobby';
const LoginPage = lazy(() => import('../pages/login'));

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedInStatus] = React.useState(false);

  onAuthStateChanged(auth, (user) => {
    if(user){
      //const uid = user.uid;
      setLoggedInStatus(true);
      if(location.pathname == "/") navigate("/home");
    }else{
      console.log("Logged out.");
      setLoggedInStatus(false);
      if(location.pathname != "/") navigate('/');
    }
  })

  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/lobby/:lobbyid" element={<LobbyPage />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>} />
        </Routes>
      </Suspense>
      {loggedIn &&
      <NavBar />
      }
    </>
  );
}

export default App;
