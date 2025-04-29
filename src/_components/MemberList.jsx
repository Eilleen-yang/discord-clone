export default function MemberList() {
  return (
    <div className="flex-1/7 dark:bg-[var(--main-bg-color)] border-l border-[var(--hover-bg-color)]">
      <ul className="flex flex-col gap-8 dark:text-[var(--main--txt-color)]">
        <li>
          <strong className="text-[var(--hover-bg-color)] dark:text-[var(--normal-txt-color)] text-2xl">
            온라인 - 3
          </strong>
          <ul>
            <li>
              <button className="flex gap-4 items-center">
                <img
                  src="/public/vite.svg"
                  alt="user profile img"
                  className="block w-[4rem] h-[4rem] rounded-full"
                />
                <div className="flex flex-col text-xl">
                  <span>양아름</span>
                </div>
              </button>
            </li>
            <li>
              <button className="flex gap-4 items-center">
                <img
                  src="/public/vite.svg"
                  alt="user profile img"
                  className="block w-[4rem] h-[4rem] rounded-full"
                />
                <div className="flex flex-col text-xl">
                  <span>양아름</span>
                </div>
              </button>
            </li>
            <li>
              <button className="flex gap-4 items-center">
                <img
                  src="/public/vite.svg"
                  alt="user profile img"
                  className="block w-[4rem] h-[4rem] rounded-full"
                />
                <div className="flex flex-col text-xl">
                  <span>양아름</span>
                </div>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-[var(--hover-bg-color)] dark:text-[var(--normal-txt-color)] text-2xl">
            오프라인 - 1
          </strong>
          <ul>
            <li>
              <button className="flex gap-4 items-center">
                <img
                  src="/public/vite.svg"
                  alt="user profile img"
                  className="block w-[4rem] h-[4rem] rounded-full"
                />
                <div className="flex flex-col text-xl">
                  <span>양아름</span>
                </div>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
