import { Link } from "react-router-dom";
import { Logo } from "./icons/logo";
import { useOverlay } from "@toss/use-overlay";
import ServerAddModal from "./ServerAddModal";
import ChannelList from "./ChannelList";

export default function Channel() {
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
          to={"/channels/:@me"}
        >
          <Logo />
        </Link>
      </div>
      <div className="px-6 border-b border-[var(--hover-bg-color)]"></div>
      <ChannelList onClick={handleServerAddClick} />
    </div>
  );
}
