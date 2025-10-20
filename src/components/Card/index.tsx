import {
  Heading,
  Cards,
  MainContainer,
  Text,
  Suggestion,
  FirstCard,
  ImageContainer,
} from "./styles";

import Crypto from "../../assets/icons/icon-crypto.svg";
import Photo from "../../assets/icons/icon-photography.svg";
import Animation from "../../assets/icons/icon-animation.svg";
import Business from "../../assets/icons/icon-business.svg";

import Design from "../../assets/icons/icon-design.svg";

const Card = () => {
  return (
    <MainContainer>
      <FirstCard>Checkout out our most popular courses!</FirstCard>

      <Cards>
        <ImageContainer>
          <Animation />
        </ImageContainer>
        <Heading>Amimation</Heading>
        <Text>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </Text>
        <Suggestion>Get Started</Suggestion>
      </Cards>
      <Cards>
        <ImageContainer>
          <Photo />
        </ImageContainer>
        <Heading>Photography</Heading>
        <Text>
          Explore critical fundamentals like lighting, composition, and focus to
          capture exceptional photos.
        </Text>
        <Suggestion>Get Started</Suggestion>
      </Cards>
      <Cards>
        <ImageContainer>
          <Design />
        </ImageContainer>
        <Heading>Design</Heading>
        <Text>
          Create beautiful, usable interfaces to help shape the future of how
          the web looks.
        </Text>
        <Suggestion>Get Started</Suggestion>
      </Cards>
      <Cards>
        <ImageContainer>
          <Crypto />
        </ImageContainer>
        <Heading>Crypto</Heading>
        <Text>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </Text>
        <Suggestion>Get Started</Suggestion>
      </Cards>
      <Cards>
        <ImageContainer>
          <Business />
        </ImageContainer>
        <Heading>Business</Heading>
        <Text>
          A step-by-step playbook to help you start, scale, and sustain your
          business without outside investment.
        </Text>
        <Suggestion>Get Started</Suggestion>
      </Cards>
    </MainContainer>
  );
};

export default Card;
