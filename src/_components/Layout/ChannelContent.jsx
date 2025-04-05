import { styled } from "styled-components";
import ContentContainer from "./ContentContainer";

const ChannelContainer = styled.div`
  width: 304px;
  height: 100%;
  background: var(--main-bg-color);
`;

export default function ChannelContent() {
  return (
    <ContentContainer>
      <ChannelContainer>채널 영역</ChannelContainer>
    </ContentContainer>
  );
}
