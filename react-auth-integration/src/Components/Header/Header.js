import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header mb-5 border border-dark">
            <Link className="border p-2 m-3 btn btn-secondary" to="/home">
                Home
            </Link>
            <Link className="border p-2 m-3 btn btn-secondary" to="/shipping">
                Shipping
            </Link>
            <Link className="border p-2 m-3 btn btn-secondary" to="/register">
                Register
            </Link>
            <Link className="border p-2 m-3 btn btn-secondary" to="/login">
                Login
            </Link>
            <span> {user.displayNamex} </span>
            {user?.email && (
                <button
                    onClick={logout}
                    className="border p-2  m-3 btn btn-danger"
                >
                    LogOut
                </button>
            )}
        </div>
    );
};
export default Header;
