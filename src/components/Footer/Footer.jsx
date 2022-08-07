import React from "react";

import logo from  "../../assets/img/logo.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import {
  FooterContainer,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItens,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SMwrap,
  Logo,
  Copy,
  SocialIcons,
  IconLink
} from "./footStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        {/* <LinksContainer>
          <LinksWrapper>
            <LinkItens>
              <LinkTitle>About Us</LinkTitle>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">How it works</FooterLink>
              <FooterLink to="">Terms of Services</FooterLink>
            </LinkItens>

            <LinkItens>
              <LinkTitle>Videos</LinkTitle>
              <FooterLink to="">Agency</FooterLink>
              <FooterLink to="">Ambassadors</FooterLink>
              <FooterLink to="">Investors</FooterLink>
              <FooterLink to="">Demo</FooterLink>
            </LinkItens>
          </LinksWrapper>

          <LinksWrapper>
            <LinkItens>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to="">Contact</FooterLink>
              <FooterLink to="">Support</FooterLink>
              <FooterLink to="">Destinations</FooterLink>
              <FooterLink to="">Sponsors</FooterLink>
            </LinkItens>

            <LinkItens>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to="">LinkedIn</FooterLink>
              <FooterLink to="">Instagram</FooterLink>
              <FooterLink to="">Twitter</FooterLink>
              <FooterLink to="">Facebook</FooterLink>
            </LinkItens>
          </LinksWrapper>
        </LinksContainer> */}

        <SocialMedia>
          <SMwrap>
            <Logo to="home"><img src={logo} alt=""/></Logo>
            <Copy>
                ©️ Аружан Нурманова 2022 - {new Date().getFullYear} Все права защищены.
            </Copy>

            <SocialIcons>
              <IconLink href="https://github.com/aruzhannurman" target="_blank">
                <FaGithub />
              </IconLink>

              <IconLink
                href="https://www.instagram.com/heeeyaru/"
                target="_blank"
              >
                <FaInstagram />
              </IconLink>

              <IconLink
                href="www.linkedin.com/in/aruzhan-nurmanova-04879021b"
                target="_blank"
              >
                <FaLinkedin />
              </IconLink>

              <IconLink href="#" target="_blank">
                <BiWorld />
              </IconLink>
            </SocialIcons>
          </SMwrap>
        </SocialMedia>
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
