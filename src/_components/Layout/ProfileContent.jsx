import { styled } from "styled-components";

const ProfileBarContainer = styled.div`
  position: absolute;
  left: 5px;
  bottom: 7px;
  width: 364px;
  height: 100px;
  background-color: var(--profilebar-bg-color);
`;

export default function ProfileContent() {
  return <ProfileBarContainer>프로필 영역</ProfileBarContainer>;
}
