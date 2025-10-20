import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  display: grid;
  width: 1000px;
  max-width: 1000px;
  margin: 0px auto;
  gap: 50px;
  padding: 100px 0px;
  grid-template-columns: repeat(3, 1fr);
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: -30px;
  justify-content: center;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 10px 32px 32px;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  border-radius: 15px;
  z-index: 11;
  background-color: white;
`;
export const FirstCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px 10px 32px 32px;
  gap: 24px;
  font-size: 30px;
  line-height: 120%;
  font-weight: bolder;
  color: ${colors.white};
  border-radius: 15px;
  z-index: 11;
  background: ${colors.gradient01};
`;
export const Heading = styled.h1`
  font-size: 24px;
  line-height: 120%;
  font-weight: bolder;
  color: ${colors.black};
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  color: ${colors.secondary01};
`;

export const Suggestion = styled.p`
  font-size: 18px;
  line-height: 150%;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${colors.primary01};
`;
