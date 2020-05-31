import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer,
} from "./cart-item.styles";

export const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>
        {quantity} * ${price}
      </PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);
