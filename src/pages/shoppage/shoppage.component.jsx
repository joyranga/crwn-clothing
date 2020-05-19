import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../../components/collection/collection.component';

import './shoppage.styles.scss';


const ShopPage = ({ match }) => {
    return (
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
}


export default ShopPage;