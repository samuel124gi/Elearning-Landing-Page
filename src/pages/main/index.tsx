import { MainContainer } from "./styles";

import Hero from "./Hero";
import Card from "../../components/Card";
import Footer from "./Footer";
const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <Card />
      <Footer />
    </MainContainer>
  );
};

export default Main;
