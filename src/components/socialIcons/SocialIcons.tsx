import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "../styles/SocialIcons.styled";

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
        <a href="http://Linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};
