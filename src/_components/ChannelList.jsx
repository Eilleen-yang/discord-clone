import { Tooltip } from "@material-tailwind/react";
import { Logo } from "./icons/logo";
import { Button } from "@material-tailwind/react";

export default function ChannelList({ initialValues }) {
  console.log("channel", initialValues);
  return initialValues.map((list) => (
    <li key={list.serverId}>
      <Tooltip
        content={list.serverName}
        placement="right"
        className="text-[var(--hover-bg-color)] bg-white text-lg px-4 py-2 rounded-lg shadow-lg"
      >
        <div className="relative flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl">
          <Button
            color="gray"
            size="sm"
            className="p-2 min-w-0 rounded-lg"
            ripple="light"
          >
            <Logo />
          </Button>
        </div>
      </Tooltip>
    </li>
  ));
}
