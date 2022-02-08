import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
    const ctx = useContext(AuthContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <Link to="/users">Users</Link>
                        {/* <a href="/">Users</a> */}
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <Link to="/admin">Admin</Link>
                        {/* <a href="/">Admin</a> */}
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        {/* <Link to="/users">Users</a> */}
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
