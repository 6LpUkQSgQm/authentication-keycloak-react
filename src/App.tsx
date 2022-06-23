import React, { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserService from "./services/UserService";
function App() {
  const [username, setUsername] = useState("");
  const initKeycloakFunction = async () => {
    await UserService.initKeycloak();
    setUsername(await UserService.getUsername());
  };
  useEffect(() => {
    initKeycloakFunction();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={username ? <Dashboard /> : <SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
