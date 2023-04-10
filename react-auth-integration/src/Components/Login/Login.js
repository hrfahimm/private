import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInUsIngGoogle } = useAuth();
    return (
        <div>
            <h1 className="m-4">Please Login</h1>
            <button
                onClick={signInUsIngGoogle}
                className="border p-2 m-3 btn btn-danger"
            >
                Google Sign In
            </button>
            <br />
            <br />
            <Link className="border p-2 m-3 btn btn-info" to="/register">
                New User ?
            </Link>
        </div>
    );
};
export default Login;
