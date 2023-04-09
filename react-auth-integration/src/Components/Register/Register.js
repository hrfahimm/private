import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input
                    className="p-2 m-3 rounded"
                    type="email"
                    placeholder="Enter Email"
                />
                <br />
                <input
                    className="p-2 m-3 rounded"
                    type="password"
                    placeholder="Enter Password"
                />
                <br />
                <input
                    className="btn btn-success"
                    type="submit"
                    value="Submit"
                />
            </form>
            <Link className="border py-1 px-2 m-3 btn btn-info" to="/login">
                Alrady Registered
            </Link>
        </div>
    );
};
export default Register;
