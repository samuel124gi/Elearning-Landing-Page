import Header from "../../../components/Header";
import {
  Image,
  ImageContainer,
  MainContainer,
  InnerContainer,
  TextContainer,
  TopTextContainer,
  Heading,
  Text,
} from "./styles";
import background from "../../../assets/images/image-hero-desktop.png";
import Button from "../../../components/Button";

const Hero = () => {
  return (
    <MainContainer>
      <Header />
      <InnerContainer>
        <ImageContainer>
          <Image src={background} />
        </ImageContainer>
        <TextContainer>
          <TopTextContainer>
            <Heading>
              Maximize skill, <br /> minimize budget
            </Heading>
            <Text>
              Our modern courses across a range of in-demand <br /> skills will
              give you the knowledge you need to live the <br /> life you want.
            </Text>
          </TopTextContainer>
          <Button variant="tertiary" label="Get Started" />
        </TextContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Hero;
