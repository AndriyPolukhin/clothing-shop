import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './shop.styles.scss';

const ShopPage = ({ match }) => {
  const collection = useSelector(
    (state) => selectCollection(state),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromSnapshot = () => {
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
      });
    };
    return () => unsubscribeFromSnapshot();
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
