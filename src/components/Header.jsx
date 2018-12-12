/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Content from './Content';
import Description from './Description';

const Intro = styled(Content)`
  ${tw('py-8 md:py-16')};
`;

const Title = styled.h1`
  ${tw('text-3xl md:text-5xl')};
  span {
    ${tw('text-orange')};
  }
`;

const Social = styled.section`
  ${tw('flex flex-wrap items-center justify-center sm:justify-start mt-8')};
`;

const Button = styled(OutboundLink)`
  ${tw(
  'cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline'
)};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`;

const Homepage = styled(Button)`
  ${tw('bg-indigo text-white')};
`;

const GitHub = styled(Button)`
  ${tw('bg-grey-dark text-white sm:mx-4 my-4 sm:my-0')};
`;

const Twitter = styled(Button)`
  ${tw('bg-blue text-white')};
`;

const Header = () => {
  return (
    <Intro>
      <Title>
        Greetings
        <span>.</span>
      </Title>
      <Description>
        <p>
          I am Michael Johnson, a developer
          <span>.</span> <br />
          My current tech stack practice includes Python (Django), JavaScript (Ember/React), and WordPress
          <span>.</span> <br />
          Chemical engineering MSci and former science educator
          <span>.</span> <br />
          The thurst for learning, growing and sharing is strong with this one
          <span>.</span>

        </p>
      </Description>
      <Social>
        <Homepage role="button" href="https://github.com/mbeche">
          Github
        </Homepage>
        <GitHub role="button" href="https://www.linkedin.com/in/mbjohnsonche/">
          LinkedIn
        </GitHub>
        <Twitter role="button" href="https://twitter.com/mDevStix">
          Twitter
        </Twitter>
      </Social>
    </Intro>
  );
};

export default Header;
