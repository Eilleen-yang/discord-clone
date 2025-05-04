export default function ModeButton() {
  const onModeChangeClick = () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };
  return (
    <div className="absolute right-[10px] top-[10px]">
      <button
        className="block text-black dark:text-[var(--main-txt-color)] text-xl font-semibold"
        onClick={onModeChangeClick}
      >
        모드 전환
      </button>
    </div>
  );
}
