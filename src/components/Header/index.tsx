import { InnerContainer, MainContainer } from "./styles";
import Logo from "../../assets/icons/logo-dark.svg";
import Button from "../../components/Button";
const Header = () => {
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <Logo />
          <Button variant="primary" label="Get started" />
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default Header;
