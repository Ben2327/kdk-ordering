import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage  from "../collection/collection.component";


const OrderPage = ({ match }) => (
  <div className='order-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default OrderPage;