import { Link } from "react-router-dom";

export default function ServerRoomList() {
  return (
    <div className="w-[72px] h-full dark:bg-[var(--main-bg-color)]">
      <div className="flex items-center flex-col gap-[8px] px-[16px]">
        <Link
          className="block w-[40px] h-[40px] bg-[var(--normal-txt-color)]"
          to={"/server"}
        >
          <img
            src="/public/logo.svg"
            alt="discode logo"
            className="block w-[24px] h-[24px]"
          />
        </Link>
      </div>
    </div>
  );
}
