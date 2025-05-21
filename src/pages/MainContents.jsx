import Channel from "../_components/Channel";
import TopServerName from "../_components/TopServerName";
import ProfileFiexd from "../_components/ProfileFiexd";
import ModeButton from "../_components/ModeButton";
import ChannelContent from "../Layout/ChannelContent";

export default function MainContents() {
  return (
    <>
      <TopServerName />
      <div>
        <div className="flex flex-row w-full h-[calc(100dvh-3.8rem)]">
          <div className="w-[7.2rem]">
            <Channel />
          </div>
          <div className="flex-1">
            <ChannelContent />
          </div>
        </div>
      </div>
      <ProfileFiexd />
      <ModeButton />
    </>
  );
}
