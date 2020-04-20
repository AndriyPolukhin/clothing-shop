import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import Header from "./components/header/header.component";

// * AuthenticationPЗ
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// * Redux
import { setCurrentUser } from "./redux/user/user.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // * Create the user in the database
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => unsubscribeFromAuth();
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
};

export default App;
