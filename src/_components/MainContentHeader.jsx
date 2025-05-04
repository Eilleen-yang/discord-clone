import { ShapIcon } from "./icons/channel";

export default function MainContentHeader() {
  return (
    <div className="flex items-center gap-2 p-2 pl-5 h-19 dark:text-white border border-[var(--hover-bg-color)]">
      <ShapIcon width={18} height={18} />
      <span className="block text-2xl text-[var(--hover-bg-color)] dark:text-white">
        일반
      </span>
      <div></div>
    </div>
  );
}
