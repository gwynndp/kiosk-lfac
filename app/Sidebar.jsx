import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logos from "./Logos";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px 0 10px 30px;
  min-width: 250px;
  max-width: 250px;
`;

const StyledLink = styled(Link)`
  background-color: blue;
  color: white;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;
  padding: 20px;
  margin: 5px 0;
  font-size: small;
  display: flex;
  align-self: stretch;
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <Logos />
      <StyledLink to="/lfac">
        <span>Listening for a Change</span>
      </StyledLink>
      <StyledLink to="/schools">
        <span>Schools</span>
      </StyledLink>
      <StyledLink to="/fires">
        <span>Fire Stories</span>
      </StyledLink>
      <StyledLink to="/jackdemayo">
        <span>Remembering Jack DeMayo</span>
      </StyledLink>
      <StyledLink to="/vom">
        <span>Valley of the Moon</span>
      </StyledLink>
    </Wrapper>
  );
}
