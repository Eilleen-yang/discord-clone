import { styled } from "styled-components";
import ContentContainer from "./ContentContainer";

const MemberContainer = styled.div`
  width: 420px;
  height: 100%;
  background: var(--main-bg-color);
`;

export default function MemberContent() {
  return (
    <ContentContainer>
      <MemberContainer>멤버, 친구 리스트</MemberContainer>
    </ContentContainer>
  );
}
