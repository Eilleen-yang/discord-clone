import Channel from "../_components/Channel";
import MemberList from "../_components/MemberList";
import ModeButton from "../_components/ModeButton";
import ProfileFiexd from "../_components/ProfileFiexd";
import MainContents from "./MainContents";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="relative bg-white dark:bg-black w-full h-[100dvh]">
      <div className="w-full h-[3.6rem] leading-[3.6rem] text-[1.4rem] text-black dark:text-white text-center">
        <span className="block">양아름님의 서버</span>
      </div>
      <div className="flex flex-row w-full h-[calc(100%-3.6rem)]">
        <div className="flex w-[37.5rem]">
          <Channel />
          <Sidebar />
        </div>
        <div className="flex w-full text-black">
          <MainContents />
          <MemberList />
        </div>
      </div>
      <ProfileFiexd />
      <ModeButton />
    </div>
  );
}
