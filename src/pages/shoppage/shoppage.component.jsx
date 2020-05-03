import React from "react";
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shoppage.styles.scss';

const ShopPage = () => {
    return (
        <div>  
            {
                SHOP_DATA.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    );
}

export default ShopPage;