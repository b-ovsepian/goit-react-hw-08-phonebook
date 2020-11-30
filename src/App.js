import React, { Suspense, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "./routes";
import authOperations from "./redux/operations/authOperations";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute
                key={route.label}
                {...route}
                restricted={route.restricted}
              />
            )
          )}
          <Redirect to="/"></Redirect>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
