import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  background-color: blue;
  width: 130px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonLink = styled(Link)`
  background: none;
  border: none;
  color: white;
  text-transform: uppercase;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  text-transform: uppercase;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;

function handleScrollNext(e) {
  const target = document.querySelector("#gallery");
  // const height = target.offsetHeight;  //height of the scroll space
  // if target.scrollTop === target.scrollTopMax then it is at the bottom of the scrolling content
  // if target.scrollTop === 0 then it is at the top of the scrolling content
  e.preventDefault();
  const adjustment = e.target.parentNode.id === "next" ? 365 : -365;
  target.scrollBy({
    top: adjustment,
    behavior: "smooth"
  });
}

export default function MainNav({ gallery }) {
  console.log("INSIDE MAIN NAV", gallery);
  return (
    <Nav>
      <ButtonLink exact="true" to="/">
        <img src="images/kiosk_home.png" alt="home" width="100px" />
      </ButtonLink>
      {gallery === "true" ? (
        <>
          <Button id="prev" onClick={e => handleScrollNext(e)}>
            <div>PREV</div>
            <img
              src="images/kiosk_arrow_up.png"
              alt="scroll up"
              width="100px"
            />
          </Button>
          <Button id="next" onClick={e => handleScrollNext(e)}>
            <img
              src="images/kiosk_arrow_down.png"
              alt="scroll down"
              width="100px"
            />
            <div>NEXT</div>
          </Button>
        </>
      ) : null}
    </Nav>
  );
}

MainNav.propTypes = {
  gallery: PropTypes.string.isRequired
};
