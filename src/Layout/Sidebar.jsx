import { Arrow } from "../_components/Icons";

export default function Sidebar() {
  return (
    <div className="w-[30.4rem] bg-white dark:bg-[var(--main-bg-color)] text-black dark:text-white border-[var(--hover-bg-color)] border-l border-t rounded-tl-3xl">
      <div className="pl-4 pr-4 w-full h-[47.4px] border-b border-b-black dark:border-b-[var(--hover-bg-color)]">
        <button className="w-full h-full leading-[47.4px] flex justify-between items-center text-2xl font-bold">
          <span>구름 FE3 4월팀 스터디</span>
          <Arrow width={14} height={14} color={"#000 var(--main-bg-white)"} />
        </button>
      </div>
      <div className="">
        <button>이벤트</button>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-2">
            <span className="text-xl font-semibold">채팅 채널</span>
            <button>
              <Arrow
                width={12}
                height={12}
                color={"#000 var(--main-bg-white)"}
              />
            </button>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-xl font-semibold">음성 채널</span>
            <button>
              <Arrow
                width={12}
                height={12}
                color={"#000 var(--main-bg-white)"}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
