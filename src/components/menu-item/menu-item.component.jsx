import React from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => {
        history.push(linkUrl);
      }}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      ></BackgroundImageContainer>
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP MENU</ContentSubtitle>
      </ContentContainer>

      <Switch>
        <Route exact path="" />
      </Switch>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
