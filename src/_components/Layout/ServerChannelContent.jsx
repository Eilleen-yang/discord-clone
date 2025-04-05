import { styled } from "styled-components";

const ServerChannelContainer = styled.div`
  width: 72px;
  height: 100%;
  background: var(--main-bg-color);
`;

export default function SeverChannelContent() {
  return <ServerChannelContainer>서버채널영역</ServerChannelContainer>;
}
