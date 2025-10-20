import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  overflow: hidden;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(243, 241, 252, 1));
`;

export const InnerContainer = styled.div`
  width: 350px;
  padding: 20px 24px;
  max-width: 350px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  gap: 24px;
  background: ${colors.gradient02};
`;
