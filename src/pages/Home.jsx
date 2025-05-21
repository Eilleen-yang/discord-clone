import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-dvh bg-[var(--main-color)] text-black">
      <Link to="/channels/@me">
        <span className="py-4 px-8 inline-block rounded-lg text-3xl text-white border border-white font-semibold hover:bg-white transition-colors duration-300 ease-in-out hover:text-[var(--main-color)]">
          Discode 열기
        </span>
      </Link>
    </div>
  );
}
