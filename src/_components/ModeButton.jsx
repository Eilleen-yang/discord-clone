export default function ModeButton() {
  const onModeChangeClick = () => {
    if (document.documentElement.getAttribute("data-theme").includes("dark")) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    //공식 문서의 darkMode 설정
    // if (
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)
    // ) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
  };
  return (
    <div className="absolute right-0 bottom-0">
      <button
        className="block text-black dark:text-[var(--main-txt-color)]"
        onClick={onModeChangeClick}
      >
        모드 변경
      </button>
    </div>
  );
}
