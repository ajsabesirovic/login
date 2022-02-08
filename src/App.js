import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      {/* <main>{ctx.isLoggedIn ? <Home /> : <Login />}</main> */}
      <main>
        {!ctx.isLoggedIn ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
