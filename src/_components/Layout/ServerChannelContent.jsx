import { styled } from "styled-components";
import ServerContent from "../common/ServerContent";

const ServerChannelContainer = styled.div`
  width: 72px;
  height: 100%;
  background: var(--main-bg-color);
`;

export default function SeverChannelContent() {
  return (
    <ServerChannelContainer>
      <ServerContent />
    </ServerChannelContainer>
  );
}
