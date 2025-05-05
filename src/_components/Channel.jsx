import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import { CircleIcon } from "./icons/channel";
import { Logo } from "./icons/logo";

export default function Channel() {
  return (
    <div className="flex items-center flex-col gap-3 w-[7.2rem] h-full">
      <div>
        <Link
          className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
          to={"/server"}
        >
          <Logo />
        </Link>
      </div>
      <div className="px-6 border-b border-[var(--hover-bg-color)]"></div>
      <ul className="w-full flex flex-col items-center gap-2">
        <li>
          <Link
            className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl"
            to={"/server"}
          >
            <Logo />
          </Link>
        </li>
        <li>
          <button className="flex items-center justify-center w-[40px] h-[40px] bg-[var(--hover-bg-color)] hover:bg-[var(--main-color)] rounded-xl">
            <CircleIcon width={18} height={18} />
          </button>
        </li>
      </ul>
    </div>
  );
}
