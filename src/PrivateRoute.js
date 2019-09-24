import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import {Loader} from "./components/Loader";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    currentUser === null ? <Loader text="Loading..."/> : <Route
      {...rest}
      render={routeProps =>
        currentUser === false ? (
          <Redirect to={"/signin"} />

        ) : (
            <RouteComponent {...routeProps} />

          )
      }
    />
  );
};


export default PrivateRoute