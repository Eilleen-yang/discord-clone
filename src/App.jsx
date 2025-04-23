import "./reset.css";
import "./App.css";
import styled from "styled-components";
import SeverChannelContent from "./_components/Layout/ServerChannelContent";
import ChannelContent from "./_components/Layout/ChannelContent";
import MemberContent from "./_components/Layout/MemberContent";
import ProfileContent from "./_components/Layout/ProfileContent";
import MainContents from "./_components/Layout/MainContents";

const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <div style={{ position: "relative" }}>
      <ContentSection>
        <SeverChannelContent />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
          }}
        >
          <ChannelContent />
          <MainContents />
          <MemberContent />
        </div>
        <ProfileContent />
      </ContentSection>
    </div>
  );
}

export default App;
