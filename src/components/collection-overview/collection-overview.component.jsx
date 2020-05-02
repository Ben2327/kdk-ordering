import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import OrderPreview from '../order-preview/order-preview.component';

import { selectCollectionsForPreview } from '../../redux/order/order.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <OrderPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);