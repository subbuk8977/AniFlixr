import React from "react";

import "./Footer.scss";
import { GitHub } from "react-feather";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <p>
          AniFlixr has been developed as a personal project aimed at honing my
          skills in software development. It is important to clarify that
          AniFlixr is not affiliated or associated with any Anime Producing
          studios responsible for the production and distribution of the listed
          Animes. The platform serves as a user-friendly interface for
          connecting to self-hosted anime files provided by third-party sources.
          It is emphasized that AniFlixr, being a personal development project,
          is not intended to resist legal obligations. In the event of any legal
          concerns, AniFlixr will promptly cease its operations.
        </p>
        <div className="logos">
          <a
            href="https://github.com/Calisto-Mathias/AniFlixr"
            target="__blank"
          >
            <GitHub className="github"></GitHub>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
