import React from "react";
import useAuth from "../../hooks/useAuth";
const Home = () => {
    const { user } = useAuth();
    return (
        <div className="border border-dark p-5 m-5 rounded bg-danger">
            <h1>This is Home</h1>
            <h5>user:{user.displayName} </h5>
        </div>
    );
};
export default Home;
