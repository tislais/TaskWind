import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./views/Auth";
import Header from "./components/Header";
import { useState } from "react";
import { getUser, logout } from "./services/users";
import Home from "./views/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const handleLogOut = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <>
      <Header {...currentUser} handleLogOut={handleLogOut} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
            {currentUser && <Home {...currentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
