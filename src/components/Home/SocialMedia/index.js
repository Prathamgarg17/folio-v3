import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'; // Import your CSS file if you have one
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'
function SocialIcons() {
  return (
    <div>
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Linkedin</span>
          <a
            href="https://www.linkedin.com/in/prathamgarg/"
            target="_blank"
            rel="noreferrer"
          >
          <span><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /></span>
          </a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <a
            href="https://github.com/Prathamgarg17"
            target="_blank"
            rel="noreferrer"
          >
          <span><FontAwesomeIcon icon={faInstagram} color="#4d4d4e" /></span>
          </a>
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <a
            href="https://github.com/Prathamgarg17"
            target="_blank"
            rel="noreferrer"
          >
          <span><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></span>
          </a>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <a
            href="https://github.com/Prathamgarg17"
            target="_blank"
            rel="noreferrer"
          >
          <span><FontAwesomeIcon icon={faYoutube} color="#4d4d4e" id='sky' /></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
