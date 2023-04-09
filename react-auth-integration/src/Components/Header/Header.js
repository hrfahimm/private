import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFireBase from "../../hooks/useFirebase";
const Header = () => {
    const { user } = useFireBase;
    return (
        <div className="header mb-5 border border-dark">
            <Link className="border p-2 m-3 btn btn-secondary" to="/home">
                Home
            </Link>
            <Link className="border p-2 m-3 btn btn-secondary" to="/register">
                Register
            </Link>
            <Link className="border p-2 m-3 btn btn-secondary" to="/login">
                Login
            </Link>
            {user?.email && (
                <button className="border p-2  m-3 btn btn-danger">
                    LogOut
                </button>
            )}
        </div>
    );
};
export default Header;
