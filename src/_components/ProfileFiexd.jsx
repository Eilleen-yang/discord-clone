export default function ProfileContent() {
  return (
    <div className="flex items-center justify-between p-4 absolute left-2 bottom-2 w-[36rem] h-[5.8rem] bg-[var(--profilebar-bg-color)] rounded-xl">
      <div className="flex gap-4 items-center">
        <img
          src="/public/vite.svg"
          alt="user profile img"
          className="block w-[4rem] h-[4rem] rounded-full"
        />
        <div className="flex flex-col text-xl">
          <span>양아름</span>
          <span className="block text-base text-gray-300">자리비움</span>
        </div>
      </div>
      <div className="flex gap-4">
        <button>
          <img src="/public/toke.svg" alt="말하기 활성화/비활성화 버튼" />
        </button>
        <button>
          <img src="/public/mute.svg" alt="듣기 활성화/비활성화 버튼" />
        </button>
        <button>
          <img src="/public/setting.svg" alt="프로필 셋팅 버튼" />
        </button>
      </div>
    </div>
  );
}
