import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  const element = (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  )
  return element;
}

export default CollectionPreview;