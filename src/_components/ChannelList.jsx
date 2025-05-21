import { Tooltip } from "@material-tailwind/react";
import { Logo } from "./icons/logo";
import { Button } from "@material-tailwind/react";
import { useChannelNameStore } from "../stores/useChannelNameStore";
import { useEffect } from "react";
import { CircleIcon } from "./icons/channel";

export default function ChannelList({ onClick }) {
  const { loadServerChannels, updateSeletedServerName } = useChannelNameStore(
    (state) => state.actions
  );
  const serverChannels = useChannelNameStore((state) => state.serverChannels);

  const handleClick = (channelName) => {
    updateSeletedServerName(channelName);
  };

  useEffect(() => {
    loadServerChannels();
  }, [loadServerChannels]);

  return (
    <ul className="w-full flex flex-col items-center gap-2">
      {serverChannels.map((channel) => (
        <li
          key={channel.serverId}
          onClick={() => handleClick(channel.serverName)}
        >
          <Tooltip
            content={channel.serverName}
            placement="right"
            className="text-[var(--hover-bg-color)] bg-white text-lg px-4 py-2 rounded-lg shadow-lg"
          >
            <div className="relative flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl">
              <Button
                color="gray"
                size="sm"
                className="p-2 min-w-0 rounded-lg"
                ripple={true}
              >
                <Logo />
              </Button>
            </div>
          </Tooltip>
        </li>
      ))}
      <button
        onClick={onClick}
        className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
      >
        <CircleIcon width={18} height={18} />
      </button>
    </ul>
  );
}
