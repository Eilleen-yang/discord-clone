import ModeButton from "../_components/ModeButton";
import ServerRoomList from "../_components/ServerRoomList";
import ProfileFiexd from "../_components/ProfileFiexd";
import ChannelContent from "./ChannelContent";

export default function Layout() {
  return (
    <div className="relative bg-white dark:bg-black w-full h-[100dvh]">
      <div className="w-full h-[3.6rem] leading-[3.6rem] text-[1.4rem] text-black dark:text-white text-center">
        <span className="block">양아름님의 서버</span>
      </div>
      <div className="flex flex-row w-full h-[calc(100%-36px)]">
        <ServerRoomList />
        <div className="flex w-full text-black">
          <div className="flex-1/7">dddd</div>
          {/* <ChannelContent /> */}
          <div className="flex-1/2">dddd</div>
          <div className="flex-1/6">dddd</div>
          {/* 
          <MainContents />
          <MemberContent />*/}
        </div>
      </div>
      <ProfileFiexd />
      <ModeButton />
    </div>
  );
}
