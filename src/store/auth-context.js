import React, { useEffect, useState } from "react";
import axios from "axios";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = async (email, password) => {
    let res = await axios.post(
      "https://serene-fortress-45917.herokuapp.com/auth/login",
      {
        email: email,
        password: password,
      }
    );
    if (res.status === 200) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "1");

      const d = new Date();
      d.setTime(d.getTime() + 9000);
      let expires = "expires=" + d.toUTCString();

      document.cookie = `access_token=${JSON.stringify(
        res.data.data.access_token
      )}`;
      document.cookie = `refresh_token=${JSON.stringify(
        res.data.data.refresh_token
      )}`;
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const storedLogged = localStorage.getItem("isLoggedIn");
    if (storedLogged === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
