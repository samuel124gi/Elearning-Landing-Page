import Logo from "../../../assets/icons/logo-light.svg";
import Button from "../../../components/Button";
import { InnerContainer, MainContainer } from "./styles";

const Footer = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Logo />
        <Button variant="secondary" label="Get Started" />
      </InnerContainer>
    </MainContainer>
  );
};

export default Footer;
