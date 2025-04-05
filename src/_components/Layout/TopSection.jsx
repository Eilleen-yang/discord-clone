import { styled } from "styled-components";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 36px;
  background: var(--main-bg-color);
`;

export default function TopSection() {
  return <TopSectionContainer>top section</TopSectionContainer>;
}
