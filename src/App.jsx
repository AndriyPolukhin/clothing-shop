import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
// * AuthenticationPЗ
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// * Redux
import { setCurrentUser } from "./redux/user/user.actions";
// import { selectCurrentUser } from "./redux/user/user.selectors";

const App = () => {
  // const state = useSelector((state) => state, shallowEqual);
  // const { currentUser } = createStructuredSelector({
  //   currentUser: selectCurrentUser,
  // })(state);

  const currentUser = useSelector(
    (state) => state.user.currentUser,
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // * Create the user in the database
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) =>
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          )
        );
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
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </>
  );
};

export default App;
