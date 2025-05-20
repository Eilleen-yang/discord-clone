import { useState } from "react";
import { saveServerChannel } from "../utils/saveServerChannel";

export default function ServerAddModal({ isOpen, close }) {
  const [serverName, setServerName] = useState("");

  const onServerAddSubmit = (e) => {
    e.preventDefault();

    const serverChannelData = {
      serverId: Date.now(),
      serverName,
    };
    saveServerChannel(serverChannelData);
    close();
    window.location.reload();
    console.log("성공", serverName);
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={onServerAddSubmit}>
      <div className="flex absolute top-0 left-0 w-full h-screen bg-black/60 items-center justify-center  rounded-2xl">
        <div className="relative flex items-center justify-center flex-col gap-8 p-6 min-w-[28rem] w-[38rem] h-[35rem] bg-black border border-[var(--hover-bg-color)] rounded-2xl text-xl">
          <h2 className="text-4xl font-bold">채널 추가하기</h2>
          <div className="text-center">
            <p className="mb-4">
              새로운 서버에 이름과 아이콘을 부여해 개성을 드러내보세요.
            </p>
            <p>나중에 언제든 바꿀 수 있어요 😊</p>
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>서버 이름</label>
            <input
              onChange={(e) => setServerName(e.target.value)}
              type="text"
              className="px-4 w-full h-16 leading-16 border border-[var(--hover-bg-color)] rounded-lg"
            />
          </div>
          <button className="w-96 h-16 leading-16 bg-[var(--main-color)] rounded-lg">
            만들기
          </button>
          <button
            onClick={close}
            className="absolute top-2 right-6 text-[var(--hover-bg-color)] hover:text-white text-4xl"
          >
            x
          </button>
        </div>
      </div>
    </form>
  );
}
