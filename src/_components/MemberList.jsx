import profileImg from "../assets/logo_color.svg";
import { LogoColorIcon } from "./icons/logo";

const user = [
  {
    id: 0,
    name: "양아름",
  },
];

export default function MemberList() {
  return (
    <div className="flex-1/7 px-4 dark:bg-[var(--main-bg-color)] border-l border-[var(--hover-bg-color)]">
      <ul className="flex flex-col gap-8 mt-4 dark:text-[var(--main--txt-color)]">
        <li className="flex flex-col gap-4">
          <strong className="text-[var(--hover-bg-color)] dark:text-[var(--normal-txt-color)] text-xl">
            온라인 - 3
          </strong>
          <ul className="flex flex-col gap-3">
            <li className="pl-2 hover:bg-blue-50 dark:hover:bg-[var(--memberList-bg-color)]">
              <button className="flex gap-4 items-center relative w-full">
                <LogoColorIcon width={34} height={34} />
                <span className="absolute left-0 bottom-0 w-4 h-4 bg-green-500 rounded-full"></span>
                <div className="flex flex-col text-xl">
                  <span>양아름</span>
                </div>
              </button>
            </li>
            <li className="pl-2 hover:bg-blue-50 dark:hover:bg-[var(--memberList-bg-color)]">
              <button className="flex gap-4 items-center relative w-full">
                <LogoColorIcon width={34} height={34} />
                <span className="absolute left-0 bottom-0 w-4 h-4 bg-green-500 rounded-full"></span>
                <div className="flex flex-col text-xl">
                  <span>이예도</span>
                </div>
              </button>
            </li>
            <li className="pl-2 hover:bg-blue-50 dark:hover:bg-[var(--memberList-bg-color)]">
              <button className="flex gap-4 items-center relative w-full">
                <LogoColorIcon width={34} height={34} />
                <span className="absolute left-0 bottom-0 w-4 h-4 bg-green-500 rounded-full"></span>
                <div className="flex flex-col text-xl">
                  <span>조연경</span>
                </div>
              </button>
            </li>
          </ul>
        </li>
        <li className="flex flex-col gap-4">
          <strong className="text-[var(--hover-bg-color)] dark:text-[var(--normal-txt-color)] text-xl">
            오프라인 - 1
          </strong>
          <ul>
            <li className="pl-2 hover:bg-blue-50 dark:hover:bg-[var(--memberList-bg-color)] opacity-20 hover:opacity-100">
              <button className="flex gap-4 items-center relative w-full">
                <LogoColorIcon width={34} height={34} />
                <span className="absolute left-0 bottom-0 w-4 h-4 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col text-xl">
                  <span>김호영</span>
                </div>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
