import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPage from '../collection/collection.component';
import CollectionPageContainer from '../collection/collection.container';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded,
// } from '../../redux/shop/shop.selectors';

import './shop.styles.scss';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  // const state = useSelector((state) => state, shallowEqual);
  // const {
  //   isCollectionFetching,
  //   isCollectionsLoaded,
  // } = createStructuredSelector({
  //   isCollectionFetching: selectIsCollectionFetching,
  //   isCollectionsLoaded: selectIsCollectionsLoaded,
  // })(state);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCollectionsStart()), [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        // render={(otherProps) => (
        //   <CollectionsOverviewWithSpinner
        //     isLoading={isCollectionFetching}
        //     {...otherProps}
        //   />
        // )}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        // render={(otherProps) => (
        //   <CollectionPageWithSpinner
        //     isLoading={!isCollectionsLoaded}
        //     {...otherProps}
        //   />
        // )}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
