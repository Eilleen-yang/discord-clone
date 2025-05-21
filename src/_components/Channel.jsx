import { Link } from "react-router-dom";
import { CircleIcon } from "./icons/channel";
import { Logo } from "./icons/logo";
import { useOverlay } from "@toss/use-overlay";
import ServerAddModal from "./ServerAddModal";
import { useEffect, useState } from "react";
import { loadServerChannel } from "../utils/saveServerChannel";
import ChannelList from "./ChannelList";
import { useChannelNameStore } from "../stores/useChannelNameStore";

export default function Channel() {
  const { loadServerChannels } = useChannelNameStore((state) => state.actions);

  const { open } = useOverlay();
  const handleServerAddClick = () => {
    open(({ isOpen, close }) => (
      <ServerAddModal close={close} isOpen={isOpen} />
    ));
  };

  return (
    <div className="flex items-center flex-col gap-3 w-[7.2rem] h-full">
      <div>
        <Link
          className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
          to={"/server"}
        >
          <Logo />
        </Link>
      </div>
      <div className="px-6 border-b border-[var(--hover-bg-color)]"></div>
      <ChannelList onClick={handleServerAddClick} />
    </div>
  );
}
