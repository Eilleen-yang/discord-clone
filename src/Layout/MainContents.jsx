import Chatting from "../pages/Chatting";

export default function MainContents() {
  return (
    <div className="flex-1/2 px-4 pb-4 h-full border-l border-l-[var(--hover-bg-color)]">
      <Chatting />
    </div>
  );
}
