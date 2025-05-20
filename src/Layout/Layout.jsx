import { useState } from "react";
import Channel from "../_components/Channel";
import MainContentHeader from "../_components/MainContentHeader";
import MemberList from "../_components/MemberList";
import ModeButton from "../_components/ModeButton";
import ProfileFiexd from "../_components/ProfileFiexd";
import TopServerName from "../_components/TopServerName";
import MainContents from "./MainContents";
import Sidebar from "./Sidebar";
import { loadServerChannel } from "../utils/saveServerChannel";

export default function Layout() {
  const [channel, setChannel] = useState(() => loadServerChannel());
  return (
    <div className="relative w-full h-[100dvh] transition-colors duration-300 bg-white dark:bg-[#121212]">
      <TopServerName initialValues={channel} />
      <div>
        <div className="flex flex-row w-full h-[calc(100dvh-3.8rem)]">
          <div className="flex w-[37.5rem]">
            <Channel initialValues={channel} />
            <Sidebar initialValues={channel} />
          </div>
          <div className="w-full text-black">
            <MainContentHeader />
            <div className="flex">
              <MainContents />
              <MemberList />
            </div>
          </div>
        </div>
      </div>
      <ProfileFiexd />
      <ModeButton />
    </div>
  );
}
