import React from "react";

export default function Logos() {
  return (
    <div
      id="logos-wrapper"
      style={{
        display: "flex",
        padding: "0 10px 20px 0",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <img
        src="images/cloverdale-city-logo.png"
        alt="Cloverdale City logo"
        width="100%"
      />
      <img
        src="images/cloverdale-hs-logo.png"
        alt="Cloverdale High School logo"
        width="100%"
      />
      <img
        src="images/lfac_logo_black.gif"
        alt="Listening For a Change logo"
        width="100%"
      />
    </div>
  );
}
