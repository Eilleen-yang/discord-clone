import "./reset.css";
import "./App.css";
import styled from "styled-components";
import SeverChannelContent from "./_components/Layout/ServerChannelContent";
import TopSection from "./_components/Layout/TopSection";
import ContentContainer from "./_components/Layout/ContentContainer";
import ChannelContent from "./_components/Layout/ChannelContent";
import MainContents from "./_components/Layout/MainContents";
import MemberContent from "./_components/Layout/MemberContent";
import ProfileContent from "./_components/Layout/ProfileContent";

const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 36px);
`;

function App() {
  return (
    <>
      <TopSection />
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
    </>
  );
}

export default App;
