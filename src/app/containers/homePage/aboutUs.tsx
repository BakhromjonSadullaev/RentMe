import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImage from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white  
    `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    text-sm
    md:max-w-2xl
    md:text-base
    text-gray-500
    mt-4
    font-normal
  `}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImage} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aliquam soluta numquam, rem enim magnam, iusto dolore ea quod esse
          facilis dolorem in quae quasi eligendi, mollitia ducimus voluptatem
          officia beatae similique vero fugit reiciendis. Magnam dolorem unde
          enim dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Optio culpa maiores officiis magnam facere totam? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Aperiam sunt, expedita at
          incidunt a ipsa error minima laudantium itaque autem tenetur similique
          officiis nulla, ullam asperiores commodi velit, quibusdam quo. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero
          fugiat obcaecati nostrum facere, maiores repellendus asperiores
          excepturi id eveniet similique nesciunt, sint, magnam cum. Recusandae
          similique incidunt eveniet pariatur?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
