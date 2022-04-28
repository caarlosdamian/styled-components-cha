import React from "react";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import whitLogo from "../../images/logo_white.svg";
import { StyleFooter } from "../styles/Footer.styled";
import { SocialIcons } from "../socialIcons/SocialIcons";


export const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <img src={whitLogo} alt="whiteLogo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons/>
        </Flex>
        <p>&copy; 2022 TOT</p>
      </Container>
    </StyleFooter>
  );
};
