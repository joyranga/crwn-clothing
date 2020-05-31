import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  const element = (git 
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
  return element;
};

export default CollectionPreview;
