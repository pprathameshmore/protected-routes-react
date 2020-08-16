import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Secret from "./Secret";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {isAuthenticated ? (
              <Redirect to="/secret" />
            ) : (
              <div>
                <h1>Homepage</h1>
                <Link to="/secret">Go to secret</Link>
                <br></br>
                <button onClick={login}>Log in</button>
              </div>
            )}
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/secret"
            logout={logout}
            component={Secret}
          />
          <Route path="*">
            <div>404 Not found </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
