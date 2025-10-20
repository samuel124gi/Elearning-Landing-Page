import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
export const ImageContainer = styled.div`
  left: 700px;
  top: -100px;
  width: 800px;
  position: absolute;
  overflow: hidden;
`;
export const InnerContainer = styled.div`
  z-index: 10;
  width: 1000px;
  mex-width: 1000px;
  margin: auto;
  height: 500px;
  display: flex;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Heading = styled.h1`
  font-size: 56px;
  line-height: 120%;
  font-weight: bolder;
  letter-spacing: 0px;
  color: ${colors.black};
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0px;
  color: ${colors.secondary01};
`;
