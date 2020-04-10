/* eslint-disable jsx-a11y/media-has-caption */
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

const LfacContent = () => {
  return (
    <section>
      <img
        src="images/kiosk_lfac_home.jpg"
        alt="Mobile Kiosk"
        width="441"
        height="400"
      />
      <p>
        Storytelling offers a unique and familiar way for students to engage
        with one another and with community members to lay the foundation for
        developing healthy relationships. Listening for a Change is built on the
        conviction that we are all 
        <em>Creating Connections--One Story at a Time</em> and it is imperative
        we find meaningful ways to understand and appreciate the colorful and
        complex people and cultures around us.
      </p>
      <p>
        Oral history interviewing is an effective way to teach communication
        skills and promote youth connectedness. Learning how to be a better
        listener, ask questions, and communicate with others across differences
        provides youth with the social emotional skills to positively engage
        with their family, peers, teachers, and the community-at-large as well
        as tools to overcome obstacles on their journey to adulthood.
      </p>
      <p>
        For the community members who come to the schools to share their stories
        and wisdom, they are honored by being seen, heard, understood, and
        respected. Through video recording, these excerpts of their stories are
        being shared with the larger community.
      </p>
      <img
        src="/images/lfac_logo_black.gif"
        alt="Listening For a Change logo"
        width="60%"
      />
    </section>
  );
};

const VomContent = () => {
  return (
    <section>
      <img
        src="images/vom-logo.png"
        alt="Valley of the Moon"
        width="200"
        height="164"
      />
      <p>
        Judge Arnold Rosenfeld formed the Valley of the Moon Foundation in
        1994. It’s mission is “in partnership with the Valley of the Moon
        Children’s Home and the Redwood Children’s Center to positively impact
        the present and future lives of the abused, abandoned, and neglected
        children in Sonoma County and to assure the children we serve positive
        opportunities to aid them to become productive, equal members of the
        community”.
      </p>
      <p>
        As a private board made up solely of volunteers the Foundation took on
        the unique role of partnering with a public entity to help raise funds
        to build a new Children’s Home as their first priority. The Foundation
        has plans to expand its support for children through four key focus
        areas:
      </p>
      <ul>
        <li>
          Continued supplemental support for the children at Valley of the Moon
          Children’s Home.
        </li>
        <li>
          Support for emancipated children including education, housing and
          employment guidance.
        </li>
        <li>Support for children in foster care and foster parents.</li>
        <li>Community child abuse prevention.</li>
      </ul>
      <p>
        Through tireless volunteer hours the Valley of the Moon Foundation has
        helped to create a safe haven for children. What they have done is not
        just help build a building, but raised awareness of the issues that
        affect abused, neglected, and abandoned children in our community so
        that support from individuals, businesses, and organizations is
        on-going. Their work is a reminder that even in wealthy communities such
        as Sonoma County, we must come together to meet the needs of those who
        can’t help themselves.
      </p>
    </section>
  );
};

const SchoolsContent = () => {
  return (
    <section>
      <p>
        Through the process of story, questioning, and reflection, students
        dispel the notions of otherness and lay a foundation for eliminating
        bullying and violence. Hearing the experiences, advice, and wisdom of
        interviewees, students gain new insight and options for transformative
        change and empowerment. The Neighborhood Listening Project thus
        effectively integrates equity and social justice studies into existing
        school curricula.
      </p>
      <img
        src="images/schools/nlp_rup-190x100.jpg"
        alt="Roseland University Prep"
        width="190"
        height="100"
      />
      <strong>Roseland University Prep:</strong>
      <p>
        Starting in February 2012, Listening for a Change implemented the
        Neighborhood Listening Project in all four tenth-grade AVID (Advancing
        Via Individual Determination) classes.
      </p>
      <strong>Sonoma Country Day School</strong>
      <strong>Santa Rosa Accelerated Charter School</strong>
      <img
        src="images/schools/nlp_piner-190x100.jpg"
        alt="Piner High School"
        width="190"
        height="100"
      />
      <strong>Piner High School:</strong>
      <p>
        From January of 2012, Listening for a Change collaborated with Michael
        Doucette and his Drama students to create an innovative arts program
        integrating oral history and drama.
      </p>
      <img
        src="images/schools/nlp_kawana-190x100.jpg"
        alt="Kawana Academy of Arts and Sciences and Sonoma Academy"
        width="190"
        height="100"
      />
      <strong>Kawana Academy of Arts and Sciences &amp; Sonoma Academy:</strong>
      <p>
        In the 2013-2014 school year, 6th graders from KAAS and 11th/12th
        graders from SA interviewed people from both communities who shared
        experiences related to immigration and overcoming obstacles to be
        successful.
      </p>
    </section>
  );
};

const JackDeMayoContent = () => {
  return (
    <section>
      <video
        track={null}
        controls
        src="videos/Jack-DeMeo.mp4"
        poster=""
        style={{
          flexShrink: "1",
          flexGrow: "1",
          width: "100%"
        }}
        autoPlay
        allowFullScreen
        title="Remembering Jack DeMayo"
      />
    </section>
  );
};

function getContent(page) {
  switch (page) {
    case "lfac":
      return <LfacContent />;
    case "vom":
      return <VomContent />;
    case "schools":
      return <SchoolsContent />;
    case "jackdemayo":
      return <JackDeMayoContent />;
    default:
      return (
        <div>"Whoops! There doesn't seem to be content for this page."</div>
      );
  }
}

export default function TextPage({ page }) {
  return (
    <>
      <MainNav gallery="false" />
      <PageWrapper>
        <PageHeader>
          <h1>{page.title}</h1>
        </PageHeader>
        <Content>{getContent(page.content)}</Content>
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
