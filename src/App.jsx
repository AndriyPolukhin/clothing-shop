import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import Header from "./components/header/header.component";

// * AuthenticationPЗ
import { auth } from "./firebase/firebase.utils";

const App = () => {
  // * Initial state for the user
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      unsubscribeFromAuth();
    });
  }, [currentUser]);
  console.log(`User is:`, currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
