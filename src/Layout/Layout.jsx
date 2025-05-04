import Channel from "../_components/Channel";
import MainContentHeader from "../_components/MainContentHeader";
import MemberList from "../_components/MemberList";
import ModeButton from "../_components/ModeButton";
import ProfileFiexd from "../_components/ProfileFiexd";
import TopServerName from "../_components/TopServerName";
import MainContents from "./MainContents";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="relative bg-white dark:bg-black w-full h-[100dvh]">
      <TopServerName />
      <div className="flex flex-row w-full">
        <div className="flex w-[37.5rem] h-[calc(100dvh-3.4rem)]">
          <Channel />
          <Sidebar />
        </div>
        <div className="w-full text-black">
          <MainContentHeader />
          <div className="flex">
            <MainContents />
            <MemberList />
          </div>
        </div>
      </div>
      <ProfileFiexd />
      <ModeButton />
    </div>
  );
}
