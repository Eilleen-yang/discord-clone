import { LogoColorIcon } from "./icons/logo";
import { MuteIcon, SettingIcon, TokeIcon } from "./icons/profileBar";

export default function ProfileContent() {
  return (
    <div className="flex items-center justify-between p-4 absolute left-3 bottom-3 w-[36rem] h-[5.8rem] bg-[var(--profilebar-bg-color)] rounded-xl">
      <button className="flex gap-3 items-center">
        <LogoColorIcon width={40} height={40} />
        <div className="flex flex-col text-xl font-semibold">
          <span>양아름</span>
          <span className="block text-base text-gray-300">자리비움</span>
        </div>
      </button>
      <div className="flex gap-4">
        <button>
          <TokeIcon color={"#fff"} />
        </button>
        <button>
          <MuteIcon />
        </button>
        <button>
          <SettingIcon />
        </button>
      </div>
    </div>
  );
}
