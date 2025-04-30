import tokeImg from "../assets/toke.svg";
import muteImg from "../assets/mute.svg";
import settingImg from "../assets/setting.svg";

export default function ProfileContent() {
  return (
    <div className="flex items-center justify-between p-4 absolute left-3 bottom-3 w-[36rem] h-[5.8rem] bg-[var(--profilebar-bg-color)] rounded-xl">
      <button className="flex gap-4 items-center">
        <img
          src="/src/assets/vite.svg"
          alt="user profile img"
          className="block w-[4rem] h-[4rem] rounded-full"
        />
        <div className="flex flex-col text-xl">
          <span>양아름</span>
          <span className="block text-base text-gray-300">자리비움</span>
        </div>
      </button>
      <div className="flex gap-4">
        <button>
          <img src={tokeImg} alt="말하기 활성화/비활성화 버튼" />
        </button>
        <button>
          <img src={muteImg} alt="듣기 활성화/비활성화 버튼" />
        </button>
        <button>
          <img src={settingImg} alt="프로필 셋팅 버튼" />
        </button>
      </div>
    </div>
  );
}
