import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  & > div {
    margin-bottom: 20px;
  }
`;
