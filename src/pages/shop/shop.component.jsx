import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import './shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const state = useSelector((state) => state, shallowEqual);
  const {
    isCollectionFetching,
    isCollectionsLoaded,
  } = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
  })(state);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCollectionsStartAsync()), [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(otherProps) => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...otherProps}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(otherProps) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...otherProps}
          />
        )}
      />
    </div>
  );
};

export default ShopPage;
