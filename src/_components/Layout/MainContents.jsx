import { styled } from "styled-components";
import ContentContainer from "./ContentContainer";
import Chatting from "../../pages/Chatting";

const MainContainer = styled.div`
  height: 100%;
  background: var(--main-bg-color);
`;

export default function MainContents() {
  return (
    <ContentContainer style={{ background: "#000", color: "#000" }}>
      <MainContainer>
        <Chatting />
      </MainContainer>
    </ContentContainer>
  );
}
