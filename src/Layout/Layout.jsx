import ModeButton from "../_components/ModeButton";
import ServerRoomList from "../_components/ServerRoomList";

export default function Layout() {
  return (
    <div className="relative bg-white dark:bg-black w-full h-[100dvh]">
      <div className="flex flex-row w-full h-[100dvh]">
        <ServerRoomList />
        {/* <div className="grid grid-cols-[1fr 3fr 1fr]">
          <ChannelContent />
          <MainContents />
          <MemberContent />
        </div>
        <ProfileContent /> */}
      </div>
      <ModeButton />
    </div>
  );
}
