import React from "react";

import "./Footer.scss";
import { GitHub } from "react-feather";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <p>
          AniFlixr is not affiliated or associated with any of the Anime
          Producing studios that are responsible for the production and
          distribution of any of the Animes that are listed on this site. It
          exists for the sole purpose of providing an easy-to-use interface for
          users to connect to self-hosted anime files by third party providers.
          As such, AniFlixr cannot be subjected to any sort of a DMCA complaint.
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
