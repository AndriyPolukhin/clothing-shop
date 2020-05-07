import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  useEffect(() => {
    const unsubscribeFromSnapshot = null;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      // console.log(snapshot);
      convertCollectionsSnapshotToMap(snapshot);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
