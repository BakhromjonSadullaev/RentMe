import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
        flex
        flex-wrap
        pb-10
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        w-full
        flex-wrap
        max-w-screen-2xl
        h-full
        justify-center
    `}
`;

const BottomContainer = styled.div`
  ${tw`
        flex
        w-full
        max-w-screen-2xl
        justify-end
    `}
`;

const CopyrightText = styled.small`
  font-size: 11px;
  ${tw`
        text-gray-400
    `};
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:mr-16
        mr-2
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        font-normal
        mt-2
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col

    `}
`;

const ListItem = styled.li`
  ${tw` 
        mb-3
    `}

  & > a {
    ${tw`
        text-xs
        text-white
        hover:text-red-500
        transition-all
    `}
  }
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-3
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-6
    md:mt-0
  `}
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex

  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-5
    h-5
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is Car Renting renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Provacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 555-445-5554</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          Reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
