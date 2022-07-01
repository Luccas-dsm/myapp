import styled, { StyledFunction } from "styled-components";

export const Container = styled.div`
  grid-area: mh;

  background-color: ${({ theme }) => theme.color.secondary};
`;
