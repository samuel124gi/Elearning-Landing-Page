import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MainContainer = styled.div`
  width: 100%;
  padding: 20px 0px;
  background: ${colors.black};
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 1000px;
  max-width: 1000px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
