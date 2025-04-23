import { styled } from "styled-components";

const ServerItemLink = styled.a`
  display: block;
`;
const ServerIcon = styled.img`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 10px;
`;

export default function ServerContentItem() {
  return (
    <ServerItemLink href="/server">
      <ServerIcon />
    </ServerItemLink>
  );
}
