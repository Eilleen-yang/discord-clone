import ContentContainer from "./ContentContainer";
import Chatting from "../../pages/Chatting";

export default function MainContents() {
  return (
    <ContentContainer>
      <div className="h-full bg-[var(--main-bg-color)]">
        <Chatting />
      </div>
    </ContentContainer>
  );
}
