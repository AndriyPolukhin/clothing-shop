import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = () => {
  const state = useSelector((state) => state, shallowEqual);

  const { collections } = createStructuredSelector({
    collections: selectCollectionsForPreview,
  })(state);

  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

export default CollectionsOverview;
