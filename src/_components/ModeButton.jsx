import { useThemeStore } from "../stores/useThemeStore";

export default function ModeButton() {
  const { theme, toggleThemeMode } = useThemeStore();

  return (
    <div className="absolute right-[10px] bottom-[10px]">
      <button
        className="flex items-center justify-center w-20 h-20 dark:bg-white bg-[var(--hover-bg-color)] text-white rounded-full dark:text-[var(--hover-bg-color)] text-xl font-semibold hover:shadow-[0_5px_15px_rgba(0,0,0,0.25)] hover:shadow-blue-950 dark:hover:shadow-[0_5px_15px_rgba(255,255,255,0.25)] dark:hover:shadow-white transition-shadow duration-300"
        onClick={toggleThemeMode}
      >
        <span>{theme}</span>
      </button>
    </div>
  );
}
