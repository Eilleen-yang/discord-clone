import { Link } from "react-router-dom";

export default function Channel() {
  return (
    <div className="flex items-center flex-col gap-3 w-[7.2rem] h-full dark:bg-[var(--main-bg-color)]">
      <div>
        <Link
          className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
          to={"/server"}
        >
          <div className="w-[24px] h-[24px]">
            <img
              src="/src/assets/logo.svg"
              alt="discode logo"
              className="block"
            />
          </div>
        </Link>
      </div>
      <div className="px-6 border-b border-[var(--hover-bg-color)]"></div>
      <ul className="w-full flex flex-col items-center gap-2">
        <li>
          <Link
            className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
            to={"/server"}
          >
            <div className="w-[24px] h-[24px]">
              <img
                src="/src/assets/logo.svg"
                alt="discode logo"
                className="block"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
            to={"/server"}
          >
            <div className="w-[24px] h-[24px]">
              <img
                src="/src/assets/logo.svg"
                alt="discode logo"
                className="block"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
            to={"/server"}
          >
            <div className="w-[24px] h-[24px]">
              <img
                src="/src/assets/logo.svg"
                alt="discode logo"
                className="block"
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
