import Sidebar from "./Sidebar";
import Chatting from "../_components/Chatting";
import MainContentHeader from "../_components/MainContentHeader";
import MemberList from "../_components/MemberList";

export default function ChannelContent() {
  return (
    <main className="flex w-full">
      <div className="w-[30.3rem]">
        <Sidebar />
      </div>
      <div className="w-full text-black">
        <MainContentHeader />
        <div className="flex">
          <Chatting />
          <MemberList />
        </div>
      </div>
    </main>
  );
}
