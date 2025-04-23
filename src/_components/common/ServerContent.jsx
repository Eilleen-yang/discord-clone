import { styled } from "styled-components";
import ServerContentItem from "./ServerContentItem";

const ServerContentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
`;

export default function ServerContent() {
  return (
    <ServerContentItemContainer>
      <ServerContentItem />
      <ServerContentItem />
      <ServerContentItem />
      <ServerContentItem />
      <ServerContentItem />
      <ServerContentItem />
    </ServerContentItemContainer>
  );
}
