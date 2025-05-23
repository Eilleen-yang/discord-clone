import { useChannelNameStore } from "../stores/useChannelNameStore";
import { Logo } from "./icons/logo";

export default function TopServerName() {
  const selectedServerName = useChannelNameStore(
    (state) => state.selectedServerName
  );

  return (
    <div className="flex items-center justify-center gap-2 w-full h-[3.6rem] leading-[3.6rem] text-[1.4rem] text-black dark:text-white font-semibold">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg">
        <Logo width={14} height={14} />
      </div>
      <span className="block">{selectedServerName}님의 서버</span>
    </div>
  );
}
