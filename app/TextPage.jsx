import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainNav from "./MainNav";
import Sidebar from "./Sidebar";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 70%;
`;

const PageHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 0 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  height: auto; //580px for Firefox
  padding: 30px;
  overflow: scroll;
`;

export default function TextPage({ page }) {
  return (
    <>
      <MainNav gallery="false" />
      <PageWrapper>
        <PageHeader>
          <h1>{page.title}</h1>
        </PageHeader>
        <Content>{page.content}</Content>
      </PageWrapper>
      <Sidebar />
    </>
  );
}

TextPage.propTypes = {
  page: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
};

TextPage.defaultProps = {
  page: {
    title: "Loading",
    content:
      "Sorry for the inconveniene!  The page is taking some time to load."
  }
};
