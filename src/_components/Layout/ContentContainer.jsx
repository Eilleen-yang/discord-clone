import { styled } from "styled-components";

const ContentLayout = styled.div`
  position: relative;
`;

export default function ContentContainer({ children }) {
  return <ContentLayout>{children}</ContentLayout>;
}
