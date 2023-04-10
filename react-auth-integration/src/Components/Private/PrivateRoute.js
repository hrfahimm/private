import React from "react";
import { Route, redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const { user } = useAuth();
    // const {children, ...rest} =props
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : redirect("/login")
            }
        ></Route>
    );
}

export default PrivateRoute;
